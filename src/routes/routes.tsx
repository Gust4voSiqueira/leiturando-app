import * as React from 'react'

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
} from '../ui/screens'
import { Words } from '../ui/screens/Words'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={Home} />
      <Screen name="Lobby" component={Lobby} />
      <Screen name="Words" component={Words} />
      <Screen name="Result" component={Result} />
      <Screen name="Resume" component={Resume} />
      <Screen name="MyProfile" component={MyProfile} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  )
}
