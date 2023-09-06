import {
  View,
  TextInput,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import { styles } from './styles'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'
import { colors } from '../../../../global/themes/default'
import { Link } from '@react-navigation/native'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useEffect, useState } from 'react'
import { useRedirect } from '../../../hooks/useRedirect'

interface IInputsFields {
  email: string
  password: string
}

export function Login() {
  const { login } = useUserRequest()
  const { onRedirect } = useRedirect()
  const [isDisbaledButton, setIsDisabledButton] = useState(false)
  const [error, setError] = useState(false)
  const [inputs, setInputs] = useState<IInputsFields>({
    email: '',
    password: '',
  })
  const stylesButtonDisabled = isDisbaledButton
    ? styles.buttonContainerDisable
    : styles.buttonContainer
  const stylesInputError = error ? styles.inputError : styles.input

  async function loginFunction() {
    try {
      setIsDisabledButton(true)
      const loginData = {
        email: inputs.email as string,
        password: inputs.password as string,
      }

      await login(loginData)

      onRedirect('/Home')
    } catch (error) {
      setError(true)
      setIsDisabledButton(false)
    }
  }

  useEffect(() => {
    setInputs({
      email: '',
      password: '',
    })
    setIsDisabledButton(false)
  }, [])

  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="25%" />

      <View style={styles.formLogin}>
        <TextInput
          style={stylesInputError}
          placeholder="Email"
          placeholderTextColor={colors['black-300']}
          autoCapitalize="none"
          value={inputs.email as string}
          onChangeText={(newText) => setInputs({ ...inputs, email: newText })}
        />

        <TextInput
          secureTextEntry={true}
          style={stylesInputError}
          placeholder="Senha"
          placeholderTextColor={colors['black-300']}
          autoCapitalize="none"
          value={inputs.password as string}
          onChangeText={(newText) =>
            setInputs({ ...inputs, password: newText })
          }
        />

        <Text style={styles.textRegister}>
          Novo por aqui?
          <Link to="/Register"> Cadastre-se</Link>
        </Text>
        <Pressable style={stylesButtonDisabled} onPress={loginFunction}>
          {!isDisbaledButton ? (
            <Text style={styles.textButton}>Entrar</Text>
          ) : (
            <ActivityIndicator
              size="small"
              style={styles.load}
              color={colors.black}
            />
          )}
        </Pressable>
      </View>
    </View>
  )
}
