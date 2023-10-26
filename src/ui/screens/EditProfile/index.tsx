import { Pressable, View } from 'react-native'
import { ButtonNext, Header } from '../../components'
import { styles } from './styles'
import { useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { useUser } from '../../../hooks/useUser'
import { handleDateChange } from '../../../utils/HandleDateChange'
import { charactersImages } from '../../../utils/CharactersImages'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, useToast } from 'native-base'

import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputEditProfile } from '../../components/InputEditProfile'
import { CharactersDTO } from '../../../dtos/UserDTO'
import { validateDate } from '../../../utils/ValidateData'
import { AppError } from '../../../utils/AppError'

interface IFields {
  name: string
  dateOfBirth: string
}

const editprofileSchema = yup.object({
  name: yup.string().min(2).max(10),
  dateOfBirth: yup.string().min(10).max(10),
})

export function EditProfile() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editprofileSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const [characterName, setCharacterName] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { userData } = useContext(UserContext)
  const { editProfile } = useUser()
  const redirect = useNavigation()

  const toast = useToast()

  const renderProfileImage = () => {
    if (characterName !== '') {
      const newImage = charactersImages(65, 65).find(
        (character) => character.name === characterName,
      ).image
      return newImage
    }

    return userData.image
  }

  function toggleModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character: CharactersDTO) {
    setCharacterName(character)
    toggleModal()
  }

  async function onEditProfile(data: IFields) {
    try {
      setIsLoading(true)
      if (data.dateOfBirth) {
        validateDate(data.dateOfBirth)
      }

      const userRequest = {
        ...data,
        characterName,
      }

      await editProfile(userRequest)

      redirect.navigate('home')
    } catch (error) {
      const isAppError = error instanceof AppError

      const title = isAppError
        ? error.message
        : 'Não foi possível atualizar seus dados agora. Tente novamente mais tarde.'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box bg={'gray.900'} style={styles.editProfileContainer}>
      <Header title="Editar Perfil" isRedirect />

      <Box bg={'gray.700'} style={styles.editProfileFormContainer}>
        <Pressable onPress={toggleModal} style={styles.imageProfile}>
          {renderProfileImage()}
        </Pressable>
        {isOpenModal && (
          <ModalSelectImage
            onSelectCharacter={onSelectCharacter}
            onCloseModal={toggleModal}
          />
        )}

        <Center>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <InputEditProfile
                placeholder="Nome ou Apelido"
                isErrors={!!errors.name}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="dateOfBirth"
            rules={{
              maxLength: 10,
            }}
            render={({ field: { onChange, value } }) => (
              <InputEditProfile
                placeholder="Data de Nascimento"
                isErrors={!!errors.dateOfBirth}
                onChangeText={(newText) => onChange(handleDateChange(newText))}
                value={value}
              />
            )}
          />
        </Center>

        <View style={styles.buttonsContainer}>
          <ButtonNext
            text="Salvar Informações"
            onPress={handleSubmit(onEditProfile)}
            isDisabled={isLoading}
          />

          <ButtonNext
            text="Alterar Senha"
            // onPress={handleSubmit(onEditProfile)}
          />
        </View>
      </Box>
    </Box>
  )
}
