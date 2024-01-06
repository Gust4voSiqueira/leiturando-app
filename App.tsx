import { NavigationContainer } from '@react-navigation/native'
import { THEME } from './global/theme'
import { TokenContextProvider } from './src/contexts/TokenContext'
import { RequestsContextProvider } from './src/contexts/RequestsContext'
import { UserContextProvider } from './src/contexts/UserDataContext'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { Routes } from './src/routes'

import { LogBox } from 'react-native'
LogBox.ignoreLogs(['new NativeEventEmitter']) // Ignore log notification by message
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <TokenContextProvider>
        <UserContextProvider>
          <RequestsContextProvider>
            <NavigationContainer>
              <Routes />
              <StatusBar
                barStyle="light-content"
                backgroundColor={'gray.900'}
                translucent
              />
            </NavigationContainer>
          </RequestsContextProvider>
        </UserContextProvider>
      </TokenContextProvider>
    </NativeBaseProvider>
  )
}
