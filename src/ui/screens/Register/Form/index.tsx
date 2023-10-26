import { View, Pressable, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { ButtonNext, InputRegister } from '../../../components'

import { styles } from './styles'

import ImageProfileDefault from '../../../../../assets/profileDefault.svg'
import { handleDateChange } from '../../../../utils/HandleDateChange'
import { charactersImages } from '../../../../utils/CharactersImages'

import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CharactersDTO, IUserRegisterDTO } from '../../../../dtos/UserDTO'
import { useState } from 'react'

interface IOnRenderImage {
  characterSelected: CharactersDTO
}

function OnRenderImage({ characterSelected }: IOnRenderImage) {
  if (characterSelected) {
    const image = charactersImages(65, 65).find(
      (character) => character.name === characterSelected,
    )
    return image.image
  } else {
    return <ImageProfileDefault />
  }
}

interface IFormRegisterProps {
  onOpenModal: () => void
  characterSelected: CharactersDTO
  onRegisterFunction: (InputRegisters: IUserRegisterDTO) => void
}

const registerSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido'),
  dateOfBirth: yup.string().required('Informe a data de nascimento.').max(10),
  password: yup
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter no mínimo 6 dígitos.'),
  confirmPassword: yup
    .string()
    .required('Confirme a senha.')
    .oneOf([yup.ref('password'), null], 'A confirmação da senha não confere'),
})

export function FormRegister({
  onOpenModal,
  characterSelected,
  onRegisterFunction,
}: IFormRegisterProps) {
  const [isLoading, setIsLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const navigation = useNavigation()

  function handleLogin() {
    navigation.navigate('login')
  }

  async function onSubmit(data: IUserRegisterDTO) {
    try {
      setIsLoading(true)

      await onRegisterFunction(data)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.formLogin}>
      <View style={styles.buttonSelectImage}>
        <Pressable onPress={onOpenModal}>
          <OnRenderImage characterSelected={characterSelected} />
        </Pressable>
        <Text style={styles.imageProfileText}>Foto de perfil</Text>
      </View>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <InputRegister
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
          <InputRegister
            placeholder="Data de nascimento"
            isErrors={!!errors.dateOfBirth}
            onChangeText={(newText) => onChange(handleDateChange(newText))}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <InputRegister
            placeholder="Email"
            isErrors={!!errors.email}
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <InputRegister
            placeholder="Senha"
            isErrors={!!errors.password}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <InputRegister
            placeholder="Confirme a senha"
            isErrors={!!errors.confirmPassword}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
      />

      <Pressable onPress={handleLogin}>
        <Text style={styles.textRegister}>Já possui cadastro? Entrar</Text>
      </Pressable>

      <ButtonNext
        isDisabled={isLoading}
        text="Cadastrar e acessar"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}
