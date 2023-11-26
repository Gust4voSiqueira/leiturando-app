import { Platform, Pressable, View } from 'react-native'
import { ButtonNext, Header } from '../../components'
import { styles } from './styles'
import { useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { useUser } from '../../../hooks/useUser'
import { handleDateChange } from '../../../utils/HandleDateChange'
import { charactersImages } from '../../../utils/CharactersImages'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Input, Text, theme, useToast } from 'native-base'

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
  password: string
  newPassword: string
  confirmNewPassword: string
}

const editprofileSchema = yup.object({
  name: yup.string().min(2).max(10),
  dateOfBirth: yup.string().min(10).max(10),
  password: yup
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter no mínimo 6 dígitos.'),
  newPassword: yup
    .string()
    .min(6, 'A nova senha deve ter no mínimo 6 dígitos.'),
  confirmNewPassword: yup
    .string()
    .oneOf(
      [yup.ref('newPassword'), null],
      'A confirmação da senha não confere',
    ),
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
  const { editProfile, login } = useUser()
  const { navigate } = useNavigation()

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

      await login(userData.email, userRequest.password)
      await editProfile(userRequest)

      navigate('home', { isReloadRanking: false })
    } catch (error) {
      const isAppError = error instanceof AppError

      if (error?.message?.error_description === 'Bad credentials') {
        toast.show({
          title: 'Senha incorreta',
          placement: 'top',
          bgColor: 'red.500',
        })
      } else {
        const title = isAppError
          ? error.message
          : 'Não foi possível atualizar seus dados agora. Tente novamente mais tarde.'

        toast.show({
          title,
          placement: 'top',
          bgColor: 'red.500',
        })
      }
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

          <Input
            value={userData.email}
            borderRadius={4}
            borderWidth={0}
            width={'90%'}
            bg="gray.900"
            color={theme.colors.gray['400']}
            height={Platform.OS === 'ios' ? 45 : 40}
            fontSize={theme.fontSizes.sm}
            marginBottom={2}
            isDisabled={true}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              maxLength: 10,
            }}
            render={({ field: { onChange, value } }) => (
              <InputEditProfile
                placeholder="Senha"
                isErrors={!!errors.password}
                onChangeText={(newText) => onChange(newText)}
                value={value}
                secureTextEntry={true}
              />
            )}
          />

          <Text
            color={'white'}
            fontSize={'md'}
            fontWeight={'semibold'}
            marginBottom={2}
          >
            Atualizar senha
          </Text>

          <Controller
            control={control}
            name="newPassword"
            rules={{
              maxLength: 10,
            }}
            render={({ field: { onChange, value } }) => (
              <InputEditProfile
                placeholder="Nova senha"
                isErrors={!!errors.newPassword}
                onChangeText={(newText) => onChange(newText)}
                value={value}
                secureTextEntry={true}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmNewPassword"
            rules={{
              maxLength: 10,
            }}
            render={({ field: { onChange, value } }) => (
              <InputEditProfile
                placeholder="Confirme a nova senha"
                isErrors={!!errors.newPassword}
                onChangeText={(newText) => onChange(newText)}
                value={value}
                secureTextEntry={true}
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
        </View>
      </Box>
    </Box>
  )
}
