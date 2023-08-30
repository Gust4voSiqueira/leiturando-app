import { useContext } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  EditProfile,
  Home,
  Lobby,
  Login,
  MyProfile,
  Register,
  Result,
  Resume,
  Phrases,
  Operations,
  MathScreen,
} from '../ui/screens'
import { Words } from '../ui/screens/Words'
import { TokenContext } from '../contexts/TokenContext'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const { token } = useContext(TokenContext)

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={token ? Home : Login} />
      <Screen name="Lobby" component={token ? Lobby : Login} />
      <Screen name="Words" component={token ? Words : Login} />
      <Screen name="Phrases" component={token ? Phrases : Login} />
      <Screen name="Result" component={token ? Result : Login} />
      <Screen name="Resume" component={token ? Resume : Login} />
      <Screen name="MyProfile" component={token ? MyProfile : Login} />
      <Screen name="EditProfile" component={token ? EditProfile : Login} />
      <Screen name="Operations" component={token ? Operations : Login} />
      <Screen name="Math" component={token ? MathScreen : Login} />
    </Navigator>
  )
}
