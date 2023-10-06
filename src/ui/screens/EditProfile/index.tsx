import { Pressable, Text, View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'
import { useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { Characters } from '../Register'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { handleDateChange } from '../../../utils/handleDateChange'
import { charactersImages } from '../../../utils/charactersImages'
import { useNavigation } from '@react-navigation/native'
import { Box, Center } from 'native-base'

import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputEditProfile } from '../../components/InputEditProfile'

interface IFields {
  name: string
  dateOfBirth: string
}

const editprofileSchema = yup.object({
  name: yup.string().max(10),
  dateOfBirth: yup.string().max(10),
})

export function EditProfile() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editprofileSchema),
  })

  const [characterName, setCharacterName] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { userData } = useContext(UserContext)
  const { editProfile } = useUserRequest()
  const redirect = useNavigation()

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

  function onSelectCharacter(character: Characters) {
    setCharacterName(character)
    toggleModal()
  }

  async function onEditProfile(data: IFields) {
    try {
      await editProfile(data)

      redirect.navigate('home')
    } catch (error) {
      return error
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
          <Pressable
            style={styles.buttonEditProfile}
            onPress={handleSubmit(onEditProfile)}
          >
            <Text style={styles.textButton}>Salvar Informações</Text>
          </Pressable>
          <Pressable style={styles.buttonEditProfile}>
            <Text style={styles.textButton}>Alterar Senha</Text>
          </Pressable>
        </View>
      </Box>
    </Box>
  )
}
