/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'
import { Card } from '../../../../components'
import { styles } from './styles'
import { UserPlus } from 'phosphor-react-native'
import { colors } from '../../../../../../global/themes/default'
import { profileInfo } from '../../../../../database/profileData'
import { progressActual } from '../../../../../utils/progressActual'
import { useRedirect } from '../../../../../hooks/useRedirect'

export interface IRequestCard {
  id: number
  uriImage: string
  name: string
  friendsCommon: number
  typeRequest: string
}

interface ICardProfile {
  onCloseModalRequests?: () => void
}

export function CardProfile({ onCloseModalRequests }: ICardProfile) {
  const { onRedirect } = useRedirect()
  const { level, requests, user } = profileInfo
  const newRequests = requests.filter(
    (request) => request.typeRequest === 'Request',
  )

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
            {requests.length > 0 && (
              <View style={customStyles.quantitieRequestsCircle}>
                <Text style={customStyles.quantitieRequestsText}>
                  {newRequests.length}
                </Text>
              </View>
            )}

            <UserPlus size={27} color={colors.white} weight="regular" />
            <Text style={customStyles.requestsText}>Solicitações</Text>
          </Pressable>
        )}

        <Image
          style={customStyles.imageProfile}
          source={{
            uri: user.image,
          }}
        />

        <Text style={customStyles.nameUser}>{user.name}</Text>

        <View style={customStyles.levelContainer}>
          <Text style={customStyles.levelText}>Nível {level.actualLevel}</Text>
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
