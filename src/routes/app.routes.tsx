import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  EditProfile,
  Home,
  Lobby,
  MyProfile,
  Result,
  Resume,
  ConnectWords,
  Operations,
  MathScreen,
  FriendsScreen,
} from '../ui/screens'
import { Words } from '../ui/screens/Words'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
        initialParams={{ isReloadRanking: false }}
      />
      <Screen name="lobby" component={Lobby} />
      <Screen name="words" component={Words} />
      <Screen name="connectWords" component={ConnectWords} />
      <Screen name="result" component={Result} />
      <Screen name="resume" component={Resume} />
      <Screen name="myProfile" component={MyProfile} />
      <Screen name="editProfile" component={EditProfile} />
      <Screen name="operations" component={Operations} />
      <Screen name="math" component={MathScreen} />
      <Screen name="friends" component={FriendsScreen} />
    </Navigator>
  )
}
