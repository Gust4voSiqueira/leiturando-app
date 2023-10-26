import { useContext } from 'react'
import { TokenContext } from '../contexts/TokenContext'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { Box } from 'native-base'

export function Routes() {
  const { token } = useContext(TokenContext)

  return (
    <Box flex={1} bgColor={'gray.900'}>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </Box>
  )
}
