import React, { useContext, useEffect, useState } from 'react'
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
import { UserContext } from '../../../contexts/UserDataContext'

type CardMatchesProps = StackScreenProps<RootStackParamList, 'CardMatches'>

export interface IUserData {
  breakthrough: number
  image: React.JSX.Element
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
  const { userData } = useContext(UserContext)
  const redirect = useRedirect()

  useEffect(() => {
    async function getMyUserData() {
      try {
        await myUser()
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
