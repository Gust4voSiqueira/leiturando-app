import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/routes'
import { StatusBar } from 'react-native'
import { THEME } from './global/theme'
import { TokenContextProvider } from './src/contexts/TokenContext'
import { RequestsContextProvider } from './src/contexts/RequestsContext'
import { UserContextProvider } from './src/contexts/UserDataContext'
import { NativeBaseProvider, theme } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <TokenContextProvider>
        <UserContextProvider>
          <RequestsContextProvider>
            <NavigationContainer>
              <AppRoutes />
              <StatusBar
                barStyle="light-content"
                backgroundColor={theme.colors.gray[900]}
                translucent
              />
            </NavigationContainer>
          </RequestsContextProvider>
        </UserContextProvider>
      </TokenContextProvider>
    </NativeBaseProvider>
  )
}
