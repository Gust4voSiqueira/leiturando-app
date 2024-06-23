import { View, Text } from 'react-native'
import { styles } from './styles'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '../../../hooks/useUser'
import { useRef, useState } from 'react'
import Toast from 'react-native-toast-message'

import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ButtonNext, InputRegister } from '../../components'
import { Pressable } from 'native-base'
import { AppError } from '../../../utils/AppError'

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
  const { login } = useUser()
  const { navigate } = useNavigation()
  const [isLoading, setIsLoading] = useState(false)

  const passwordRef = useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  async function loginFunction(data: IInputsFields) {
    try {
      setIsLoading(true)

      await login(data.email, data.password)

      setIsLoading(false)
    } catch (error) {
      const isAppError = error instanceof AppError

      const title = isAppError
        ? 'E-mail e/ou senha inválidos.'
        : 'Não foi possível entrar. Tente novamente mais tarde.'

      setIsLoading(false)

      Toast.show({
        type: 'error',
        text1: title,
        text2: title,
      })
    }
  }

  function handleUserRegister() {
    navigate('register')
  }

  function handleUpdateFocusInput() {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

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
              returnKeyType="next"
              onSubmitEditing={handleUpdateFocusInput}
              blurOnSubmit={false}
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
              ref={passwordRef}
              onSubmitEditing={handleSubmit(loginFunction)}
            />
          )}
        />

        <Pressable onPress={handleUserRegister}>
          <Text style={styles.textRegister}>Novo por aqui? Cadastre-se</Text>
        </Pressable>
        <ButtonNext
          isDisabled={isLoading}
          text="Entrar"
          onPress={handleSubmit(loginFunction)}
        />
      </View>
    </View>
  )
}
