import { View, TextInput, Text } from 'react-native'
import { styles } from './styles'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'
import { colors } from '../../../../global/themes/default'
import { ButtonNext } from '../../components'
import { Link } from '@react-navigation/native'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useState } from 'react'

interface IInputsFields {
  email: String
  password: String
}

export function Login() {
  const { login } = useUserRequest()
  const [inputs, setInputs] = useState<IInputsFields>({
    email: '',
    password: '',
  })

  function loginFunction() {
    const loginData = {
      email: inputs.email as string,
      password: inputs.password as string,
    }

    login(loginData)
  }

  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="25%" />

      <View style={styles.formLogin}>
        <TextInput
          style={styles.input}
          placeholder="Email ou Apelido"
          placeholderTextColor={colors['black-300']}
          value={inputs.email as string}
          onChangeText={(newText) => setInputs({ ...inputs, email: newText })}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors['black-300']}
          value={inputs.password as string}
          onChangeText={(newText) =>
            setInputs({ ...inputs, password: newText })
          }
        />

        <Text style={styles.textRegister}>
          Novo por aqui?
          <Link to="/Register"> Cadastre-se</Link>
        </Text>
        <ButtonNext text="Entrar" onClickFunction={loginFunction} />
      </View>
    </View>
  )
}
