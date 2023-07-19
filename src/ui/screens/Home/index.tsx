import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'

import { CardProfile } from './sections/cardProfile'

import { styles } from './styles'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { WordsCard } from './sections/words'
import { ShieldsCard } from './sections/shields'
import { RequestsList } from './sections/requestsList'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useRequests } from '../../../hooks/useRequests'

type CardMatchesProps = StackScreenProps<RootStackParamList, 'CardMatches'>

export interface IUserData {
  breakthrough: number
  imageUrl: string
  level: number
  name: string
}

export interface IRequests {
  friends: {
    id: number
    imageUrl: string
    name: string
  }[]
  requests: {
    id: number
    name: string
    imageUrl: string
    mutualFriends: number
  }[]
  requestsSend: {
    id: number
    imageUrl: string
    name: string
    mutualFriends: number
  }[]
  usersRecommended: {
    id: number
    name: string
    imageUrl: string
    mutualFriends: number
  }[]
}

export interface IOnRedirectProps {
  title: 'Palavras' | 'Imagens'
  description: string
  screen: 'Words' | 'Shields'
  textSpeech: string
}

export function Home({ navigation }: CardMatchesProps) {
  const { myUser, getRequests } = useUserRequest()
  const { removeRequest, acceptRequest } = useRequests()
  const [cardList, setCartList] = useState(false)
  const [userData, setUserData] = useState<IUserData>()
  const [requests, setRequests] = useState<IRequests>()

  useEffect(() => {
    async function getMyUserData() {
      const response = await myUser()
      const requests = await getRequests()

      setUserData(response)
      setRequests(requests)
    }
    getMyUserData()
  }, [])

  function onRedirect({
    title,
    description,
    screen,
    textSpeech,
  }: IOnRedirectProps) {
    navigation.navigate('Lobby', {
      title,
      description,
      screen,
      textSpeech,
    })
  }

  async function onRemoveRequest(id: number) {
    const response = await removeRequest(id)

    setRequests(response)
  }

  async function onAcceptRequest(id: number) {
    const response = await acceptRequest(id)

    setRequests(response)
  }

  if (!requests || !userData) return null

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      nestedScrollEnabled={cardList}
      scrollEnabled={!cardList}
    >
      <View style={styles.homeContainer}>
        <CardProfile
          onCloseModalRequests={() => setCartList(!cardList)}
          user={userData}
          requests={requests}
        />
        {cardList && (
          <RequestsList
            requests={requests.requests}
            requestsSend={requests.requestsSend}
            recommended={requests.usersRecommended}
            onRemoveRequest={onRemoveRequest}
            onAcceptRequest={onAcceptRequest}
          />
        )}
        <WordsCard onRedirectFunction={onRedirect} />
        <ShieldsCard onRedirectFunction={onRedirect} />
      </View>
    </ScrollView>
  )
}
