import { useContext } from 'react'
import { TokenContext } from '../contexts/TokenContext'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { View } from 'react-native'
import { THEME } from '../../global/theme'

export function Routes() {
  const { token } = useContext(TokenContext)

  return (
    <View style={{ flex: 1, backgroundColor: THEME.colors.gray['900'] }}>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </View>
  )
}
