import { View, TextInput, Text } from 'react-native'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'
import { colors } from '../../../../global/themes/default'
import { styles } from './styles'
import { Link } from '@react-navigation/native'
import { ButtonNext } from '../../components'

export function Register() {
  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="25%" />

      <View style={styles.formLogin}>
        <TextInput
          style={styles.input}
          placeholder="Nome ou Apelido"
          placeholderTextColor={colors['black-300']}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors['black-300']}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors['black-300']}
        />

        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Confirmar Senha"
          placeholderTextColor={colors['black-300']}
        />

        <Text style={styles.textRegister}>
          Já possui cadastro?
          <Link to="/Login"> Entrar</Link>
        </Text>
        <ButtonNext text="Cadastre-se" />
      </View>
    </View>
  )
}
