import { NavigationContainer } from '@react-navigation/native'
import { THEME } from './global/theme'
import { TokenContextProvider } from './src/contexts/TokenContext'
import { RequestsContextProvider } from './src/contexts/RequestsContext'
import { UserContextProvider } from './src/contexts/UserDataContext'

import Toast from 'react-native-toast-message'
import { Routes } from './src/routes'

import { LogBox, StatusBar } from 'react-native'
LogBox.ignoreLogs(['new NativeEventEmitter']) // Ignore log notification by message
LogBox.ignoreAllLogs()

export default function App() {
  return (
      <TokenContextProvider>
        <UserContextProvider>
          <RequestsContextProvider>
            <NavigationContainer>
              <Routes />
              <StatusBar
                barStyle="light-content"
                backgroundColor={THEME.colors.gray['900']}
                translucent
              />

              <Toast />
            </NavigationContainer>
          </RequestsContextProvider>
        </UserContextProvider>
      </TokenContextProvider>
  )
}
