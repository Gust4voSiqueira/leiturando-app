import { Text, View } from 'react-native'
import { Card } from '../../../../components'
import { styles } from './styles'
import { SignOut, UserPlus } from 'phosphor-react-native'
import { progressActual } from '../../../../../utils/ProgressActual'
import React, { useContext, useEffect } from 'react'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { UserContext } from '../../../../../contexts/UserDataContext'
import { useNavigation } from '@react-navigation/native'
import { Box, Pressable, theme } from 'native-base'
import { IUserDataDTO } from '../../../../../dtos/UserDTO'

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
  const navigation = useNavigation()
  const { requests, onLoadRequests } = useContext(RequestsContext)
  const { userData } = useContext(UserContext)

  const progressActualBarProgress = progressActual(user.breakthrough)

  useEffect(() => {
    onLoadRequests()
  }, [])

  const customStyles = styles({ progressActualBarProgress })

  return (
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

            <UserPlus size={27} color={theme.colors.white} weight="regular" />
            <Text style={customStyles.requestsText}>Solicitações</Text>
          </Pressable>
        )}

        <Pressable style={customStyles.logoutButton} onPress={handleLoggout}>
          <SignOut size={30} color={theme.colors.white} weight="regular" />
          <Text style={customStyles.requestsText}>Sair</Text>
        </Pressable>

        <View style={customStyles.imageProfile}>{userData.image}</View>

        <Text style={customStyles.nameUser}>{user.name}</Text>

        <View style={customStyles.levelContainer}>
          <Text style={customStyles.levelText}>Nível {user.level}</Text>
          <View style={customStyles.levelTotal}>
            <Box style={customStyles.progressActual} bgColor={'green.500'} />
          </View>
        </View>

        <Pressable
          bgColor={'green.500'}
          style={customStyles.buttonProfile}
          onPress={() => navigation.navigate('myProfile')}
        >
          <Text style={customStyles.textButtonProfile}>Visualizar Perfil</Text>
        </Pressable>
      </View>
    </Card>
  )
}
