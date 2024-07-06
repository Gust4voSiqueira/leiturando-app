import { Pressable, Text, TextInput, View } from 'react-native'
import { ButtonNext, Header } from '../../components'
import { styles } from './styles'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { useUser } from '../../../hooks/useUser'
import { charactersImages } from '../../../utils/CharactersImages'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputEditProfile } from '../../components/InputEditProfile'
import { CharactersDTO } from '../../../dtos/UserDTO'
import { validateDate } from '../../../utils/validateData'
import { AppError } from '../../../utils/AppError'
import { maskDate } from '../../../utils/maskDate'

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
  const inputRefs = Array.from({ length: 5 }, () => useRef(null))

  const renderProfileImage = () => {
    if (characterName !== '') {
      const newImage = charactersImages(65, 65).find(
        (character) => character.name === characterName,
      ).image
      return newImage
    }

    return userData.image
  }

  function handleUpdateFocusInput(index: number) {
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus()
    }
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
        Toast.show({
          type: 'error',
          text1: 'Falha',
          text2: 'Senha incorreta',
        })
      } else {
        const text2 = isAppError
          ? error.message
          : 'Não foi possível atualizar seus dados agora. Tente novamente mais tarde.'

        Toast.show({
          type: 'error',
          text1: 'Falha',
          text2,
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.editProfileContainer}>
      <Header title="Editar Perfil" isRedirect />

      <View style={styles.editProfileFormContainer}>
        <Pressable onPress={toggleModal} style={styles.imageProfile}>
          {renderProfileImage()}
        </Pressable>
        {isOpenModal && (
          <ModalSelectImage
            onSelectCharacter={onSelectCharacter}
            onCloseModal={toggleModal}
          />
        )}

        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <InputEditProfile
                placeholder="Nome ou Apelido"
                isErrors={!!errors.name}
                onChangeText={onChange}
                value={value}
                blurOnSubmit={false}
                ref={inputRefs[0]}
                returnKeyType="next"
                onSubmitEditing={() => handleUpdateFocusInput(0)}
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
                onChangeText={(newText) => onChange(maskDate(newText))}
                value={value}
                blurOnSubmit={false}
                ref={inputRefs[1]}
                returnKeyType="next"
                onSubmitEditing={() => handleUpdateFocusInput(1)}
              />
            )}
          />

          <TextInput
            style={styles.inputEmail}
            value={userData.email}
            editable={false}
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
                blurOnSubmit={false}
                ref={inputRefs[2]}
                returnKeyType="next"
                onSubmitEditing={() => handleUpdateFocusInput(2)}
              />
            )}
          />

          <Text style={styles.updatePasswordText}>Atualizar senha</Text>

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
                blurOnSubmit={false}
                ref={inputRefs[3]}
                returnKeyType="next"
                onSubmitEditing={() => handleUpdateFocusInput(3)}
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
                ref={inputRefs[4]}
                onSubmitEditing={handleSubmit(onEditProfile)}
              />
            )}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <ButtonNext
            text="Salvar Informações"
            onPress={handleSubmit(onEditProfile)}
            isDisabled={isLoading}
          />
        </View>
      </View>
    </View>
  )
}
