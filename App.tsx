import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/routes'
import { StatusBar } from 'react-native'
import { colors } from './global/themes/default'
import { TokenContextProvider } from './src/contexts/TokenContext'
import { RequestsContextProvider } from './src/contexts/RequestsContext'
import { UserContextProvider } from './src/contexts/UserDataContext'

export default function App() {
  return (
    <TokenContextProvider>
      <UserContextProvider>
        <RequestsContextProvider>
          <NavigationContainer>
            <AppRoutes />
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors['black-900']}
              translucent
            />
          </NavigationContainer>
        </RequestsContextProvider>
      </UserContextProvider>
    </TokenContextProvider>
  )
}
