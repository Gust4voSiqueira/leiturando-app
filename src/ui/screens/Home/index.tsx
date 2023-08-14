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
import { Loading } from '../Loading'
import { useRedirect } from '../../../hooks/useRedirect'

type CardMatchesProps = StackScreenProps<RootStackParamList, 'CardMatches'>

export interface IUserData {
  breakthrough: number
  image: string
  level: number
  name: string
}

export interface IOnRedirectProps {
  title: 'Palavras' | 'Imagens'
  description: string
  screen: 'Words' | 'Shields'
  textSpeech: string
}

export function Home({ navigation }: CardMatchesProps) {
  const { myUser } = useUserRequest()
  const [cardList, setCartList] = useState(false)
  const [userData, setUserData] = useState<IUserData>()
  const redirect = useRedirect()

  useEffect(() => {
    async function getMyUserData() {
      try {
        const response = await myUser()

        setUserData(response)
      } catch (error) {
        redirect.onRedirect('/Login')
      }
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

  if (!userData) return <Loading />

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
        />
        {cardList && <RequestsList />}
        <WordsCard onRedirectFunction={onRedirect} />
        <ShieldsCard onRedirectFunction={onRedirect} />
      </View>
    </ScrollView>
  )
}
