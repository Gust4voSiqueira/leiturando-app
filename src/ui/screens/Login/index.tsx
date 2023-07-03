import { View, TextInput, Text } from 'react-native'
import { styles } from './styles'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'
import { colors } from '../../../../global/themes/default'
import { ButtonNext } from '../../components'
import { Link } from '@react-navigation/native'
// import { api } from '../../../lib/axios'

export function Login() {
  // async function loginFunction() {
  //   try {
  //     // const response = api.post('/login', {}, {
  //     //   username:
  //     // })
  //     // console.log(response)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="25%" />

      <View style={styles.formLogin}>
        <TextInput
          style={styles.input}
          placeholder="Email ou Apelido"
          placeholderTextColor={colors['black-300']}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors['black-300']}
        />

        <Text style={styles.textRegister}>
          Novo por aqui?
          <Link to="/Register"> Cadastre-se</Link>
        </Text>
        <ButtonNext text="Entrar" />
      </View>
    </View>
  )
}
