import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, Register } from '../ui/screens'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
    </Navigator>
  )
}
