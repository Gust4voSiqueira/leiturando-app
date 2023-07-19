/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'
import { Card } from '../../../../components'
import { styles } from './styles'
import { SignOut, UserPlus } from 'phosphor-react-native'
import { colors } from '../../../../../../global/themes/default'
import { profileInfo } from '../../../../../database/profileData'
import { progressActual } from '../../../../../utils/progressActual'
import { useRedirect } from '../../../../../hooks/useRedirect'
import { IRequests, IUserData } from '../..'
import { useContext } from 'react'
import { TokenContext } from '../../../../../contexts/TokenContext'

export interface IRequestCard {
  imageUrl: string
  name: string
  mutualFriends: number
}

interface ICardProfile {
  onCloseModalRequests?: () => void
  user?: IUserData
  requests: IRequests
}

export function CardProfile({
  onCloseModalRequests,
  user,
  requests,
}: ICardProfile) {
  const { onRedirect } = useRedirect()
  const { level } = profileInfo
  const { removeToken } = useContext(TokenContext)

  const progressActualBarProgress = progressActual(
    level.actualPoints,
    level.pointsTotal,
  )

  const customStyles = styles({ progressActualBarProgress })

  return (
    <Card>
      <View style={customStyles.cardContainer}>
        {onCloseModalRequests && (
          <Pressable
            style={customStyles.requestsContainer}
            onPress={onCloseModalRequests}
          >
            {requests.requests.length > 0 && (
              <View style={customStyles.quantitieRequestsCircle}>
                <Text style={customStyles.quantitieRequestsText}>
                  {requests.requests.length}
                </Text>
              </View>
            )}

            <UserPlus size={27} color={colors.white} weight="regular" />
            <Text style={customStyles.requestsText}>Solicitações</Text>
          </Pressable>
        )}

        <Pressable style={customStyles.logoutButton} onPress={removeToken}>
          <SignOut size={30} color={colors.white} weight="regular" />
          <Text style={customStyles.requestsText}>Sair</Text>
        </Pressable>

        <Image
          source={{ uri: `data:image/jpeg;base64,${user.imageUrl}` }}
          style={customStyles.imageProfile}
        />

        <Text style={customStyles.nameUser}>{user.name}</Text>

        <View style={customStyles.levelContainer}>
          <Text style={customStyles.levelText}>Nível {user.level}</Text>
          <View style={customStyles.levelTotal}>
            <View style={customStyles.progressActual}></View>
          </View>
        </View>

        <Pressable
          style={customStyles.buttonProfile}
          onPress={() => onRedirect('/MyProfile')}
        >
          <Text style={customStyles.textButtonProfile}>Visualizar Perfil</Text>
        </Pressable>
      </View>
    </Card>
  )
}
