import { View, Text, Pressable, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'
import { useNavigation } from '@react-navigation/native'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useState } from 'react'

import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputRegister } from '../../components'
import { theme, useToast } from 'native-base'

interface IInputsFields {
  email: string
  password: string
}

const loginSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter no mínimo 6 dígitos.'),
})

export function Login() {
  const { login } = useUserRequest()
  const navigation = useNavigation()
  const [isDisbaledButton, setIsDisabledButton] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const toast = useToast()

  const stylesButtonDisabled = isDisbaledButton
    ? styles.buttonContainerDisable
    : styles.buttonContainer

  function showToast() {
    return toast.show({
      title: 'E-mail ou senha incorretos',
      placement: 'top',
      bgColor: 'red.500',
    })
  }

  async function loginFunction(data: IInputsFields) {
    try {
      setIsDisabledButton(true)

      await login(data)

      navigation.navigate('home')
      setIsDisabledButton(false)
    } catch (error) {
      showToast()
      setIsDisabledButton(false)
    }
  }

  function handleUserRegister() {
    navigation.navigate('register')
  }

  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="25%" />

      <View style={styles.formLogin}>
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

        <Pressable onPress={handleUserRegister}>
          <Text style={styles.textRegister}>Novo por aqui? Cadastre-se</Text>
        </Pressable>
        <Pressable
          style={stylesButtonDisabled}
          onPress={handleSubmit(loginFunction)}
        >
          {!isDisbaledButton ? (
            <Text style={styles.textButton}>Entrar</Text>
          ) : (
            <ActivityIndicator
              size="small"
              style={styles.load}
              color={theme.colors.black}
            />
          )}
        </Pressable>
      </View>
    </View>
  )
}
