import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/routes'
import { StatusBar } from 'react-native'
import { colors } from './global/themes/default'

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors['black-900']}
        translucent
      />
    </NavigationContainer>
  )
}
