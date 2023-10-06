import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'

import { CardProfile } from './sections/cardProfile'

import { styles } from './styles'
import { WordsCard } from './sections/words'
import { MathCard } from './sections/math'
import { RequestsList } from './sections/requestsList'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { UserContext } from '../../../contexts/UserDataContext'
import { ConnectWordsCard } from './sections/connectWords'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'native-base'
import { globalStyles } from '../../../../global/global'
import { HomeSkeleton } from './HomeSkeleton'

export interface IUserData {
  breakthrough: number
  image: React.ReactNode
  level: number
  name: string
}

export interface IOnRedirectProps {
  title: 'Palavras' | 'Matemática' | 'Ligue as palavras'
  description: string
  screen: 'words' | 'operations' | 'connectWords'
  textSpeech: string
}

export function Home() {
  const { myUser } = useUserRequest()
  const [cardList, setCartList] = useState(false)
  const { userData } = useContext(UserContext)
  const navigation = useNavigation()

  useEffect(() => {
    async function getMyUserData() {
      try {
        await myUser()
      } catch (error) {
        navigation.navigate('login')
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
    navigation.navigate('lobby', {
      title,
      description,
      screen,
      textSpeech,
    })
  }

  function redirectToAllRequests() {
    navigation.navigate('friends')
    setCartList(false)
  }

  if (!userData) return <HomeSkeleton />

  return (
    <View style={globalStyles.container}>
      <ScrollView
        nestedScrollEnabled={cardList}
        scrollEnabled={!cardList}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeContainer}>
          <CardProfile
            onCloseModalRequests={() => setCartList(!cardList)}
            user={userData}
          />
          {cardList && (
            <RequestsList redirectToAllRequests={redirectToAllRequests} />
          )}
          <WordsCard onRedirectFunction={onRedirect} />
          <ConnectWordsCard onRedirectFunction={onRedirect} />
          <MathCard onRedirectFunction={onRedirect} />
        </View>
      </ScrollView>
    </View>
  )
}
