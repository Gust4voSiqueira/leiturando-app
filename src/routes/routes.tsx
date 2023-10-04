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
  ConnectWords,
  Operations,
  MathScreen,
  FriendsScreen,
} from '../ui/screens'
import { Words } from '../ui/screens/Words'
import { TokenContext } from '../contexts/TokenContext'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  const { token } = useContext(TokenContext)

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="home" component={token ? Home : Login} />
      <Screen name="lobby" component={token ? Lobby : Login} />
      <Screen name="words" component={token ? Words : Login} />
      <Screen name="connectWords" component={token ? ConnectWords : Login} />
      <Screen name="result" component={token ? Result : Login} />
      <Screen name="resume" component={token ? Resume : Login} />
      <Screen name="myProfile" component={token ? MyProfile : Login} />
      <Screen name="editProfile" component={token ? EditProfile : Login} />
      <Screen name="operations" component={token ? Operations : Login} />
      <Screen name="math" component={token ? MathScreen : Login} />
      <Screen name="friends" component={token ? FriendsScreen : Login} />
    </Navigator>
  )
}
