import { Pressable, Text, View } from 'react-native'
import { Card } from '../../../../components'
import { styles } from './styles'
import { SignOut, UserPlus } from 'phosphor-react-native'
import { colors } from '../../../../../../global/themes/default'
import { progressActual } from '../../../../../utils/progressActual'
import { IUserData } from '../..'
import React, { useContext, useEffect } from 'react'
import { TokenContext } from '../../../../../contexts/TokenContext'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { UserContext } from '../../../../../contexts/UserDataContext'
import { useNavigation } from '@react-navigation/native'

export interface IRequestCard {
  image: React.JSX.Element
  name: string
  mutualFriends: number
}

interface ICardProfile {
  onCloseModalRequests?: () => void
  user?: IUserData
}

export function CardProfile({ onCloseModalRequests, user }: ICardProfile) {
  const navigation = useNavigation()
  const { requests, onLoadRequests } = useContext(RequestsContext)
  const { removeToken } = useContext(TokenContext)
  const { userData, removeUserData } = useContext(UserContext)

  const progressActualBarProgress = progressActual(user.breakthrough)

  useEffect(() => {
    onLoadRequests()
  }, [])

  function onLoggout() {
    removeUserData()
    removeToken()
  }

  const customStyles = styles({ progressActualBarProgress })

  return (
    <Card>
      <View style={customStyles.cardContainer}>
        {onCloseModalRequests && (
          <Pressable
            style={customStyles.requestsContainer}
            onPress={onCloseModalRequests}
          >
            {requests?.requests.length > 0 && (
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

        <Pressable style={customStyles.logoutButton} onPress={onLoggout}>
          <SignOut size={30} color={colors.white} weight="regular" />
          <Text style={customStyles.requestsText}>Sair</Text>
        </Pressable>

        <View style={customStyles.imageProfile}>{userData.image}</View>

        <Text style={customStyles.nameUser}>{user.name}</Text>

        <View style={customStyles.levelContainer}>
          <Text style={customStyles.levelText}>Nível {user.level}</Text>
          <View style={customStyles.levelTotal}>
            <View style={customStyles.progressActual}></View>
          </View>
        </View>

        <Pressable
          style={customStyles.buttonProfile}
          onPress={() => navigation.navigate('myProfile')}
        >
          <Text style={customStyles.textButtonProfile}>Visualizar Perfil</Text>
        </Pressable>
      </View>
    </Card>
  )
}
