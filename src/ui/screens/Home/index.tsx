import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { CardProfile } from './sections/cardProfile'

import { styles } from './styles'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'
import { WordsCard } from './sections/words'
import { ShieldsCard } from './sections/shields'
import { RequestsList } from './sections/requestsList'
import { profileInfo } from '../../../database/profileData'

type CardMatchesProps = StackScreenProps<RootStackParamList, 'CardMatches'>

export interface IOnRedirectProps {
  title: 'Palavras' | 'Imagens'
  description: string
  screen: 'Words' | 'Shields'
  textSpeech: string
}

export function Home({ navigation }: CardMatchesProps) {
  const [cardList, setCartList] = useState(false)

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

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      nestedScrollEnabled={cardList}
      scrollEnabled={!cardList}
    >
      <View style={styles.homeContainer}>
        <CardProfile onCloseModalRequests={() => setCartList(!cardList)} />
        {cardList && <RequestsList requests={profileInfo.requests} />}
        <WordsCard onRedirectFunction={onRedirect} />
        <ShieldsCard onRedirectFunction={onRedirect} />
      </View>
    </ScrollView>
  )
}
