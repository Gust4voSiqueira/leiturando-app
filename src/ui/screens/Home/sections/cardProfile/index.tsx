import { Pressable, Text, View } from 'react-native'
import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SignOut, UserPlus } from 'phosphor-react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { styles } from './styles'

import { Card } from '../../../../components'
import { IUserDataDTO } from '../../../../../dtos/UserDTO'
import { progressActual } from '../../../../../utils/progressActual'
import { UserContext } from '../../../../../contexts/UserDataContext'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { THEME } from '../../../../../../global/theme'

export interface IRequestCard {
  image: React.JSX.Element
  name: string
  mutualFriends: number
}

interface ICardProfile {
  onCloseModalRequests?: () => void
  user?: IUserDataDTO
  handleLoggout: () => void
}

export function CardProfile({
  onCloseModalRequests,
  user,
  handleLoggout,
}: ICardProfile) {
  const { navigate } = useNavigation()
  const { requests } = useContext(RequestsContext)
  const { userData } = useContext(UserContext)

  const progressActualBarProgress = progressActual(user.breakthrough)

  const customStyles = styles({ progressActualBarProgress })

  return (
    <Animated.View entering={FadeInUp.delay(100)}>
      <Card>
        <View style={customStyles.cardContainer}>
          {onCloseModalRequests && (
            <Pressable
              style={customStyles.requestsContainer}
              onPress={onCloseModalRequests}
            >
              {requests?.requests?.length > 0 && (
                <View style={customStyles.quantitieRequestsCircle}>
                  <Text style={customStyles.quantitieRequestsText}>
                    {requests.requests.length}
                  </Text>
                </View>
              )}

              <UserPlus size={27} color={THEME.colors.white} weight="regular" />
              <Text style={customStyles.requestsText}>Solicitações</Text>
            </Pressable>
          )}

          <Pressable style={customStyles.logoutButton} onPress={handleLoggout}>
            <SignOut size={30} color={THEME.colors.white} weight="regular" />
            <Text style={customStyles.requestsText}>Sair</Text>
          </Pressable>

          <View style={customStyles.imageProfile}>{userData.image}</View>

          <Text style={customStyles.nameUser}>{user.name}</Text>

          <View style={customStyles.levelContainer}>
            <Text style={customStyles.levelText}>Nível {user.level}</Text>
            <View style={customStyles.levelTotal}>
              <View style={customStyles.progressActual} />
            </View>
          </View>

          <Pressable
            style={customStyles.buttonProfile}
            onPress={() => navigate('myProfile')}
          >
            <Text style={customStyles.textButtonProfile}>
              Visualizar Perfil
            </Text>
          </Pressable>
        </View>
      </Card>
    </Animated.View>
  )
}
