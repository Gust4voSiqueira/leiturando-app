import React from 'react'
import { CardMatches } from '../../../../components'
import Jupiter from '../../../../../../assets/jupiter.svg'
import { IOnRedirectProps } from '../..'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { SCORE_CONNECT_WORDS } from '../../../../../utils/scores'

interface IPhrasesCart {
  onRedirectFunction: ({
    title,
    description,
    screen,
    textSpeech,
  }: IOnRedirectProps) => void
}

export function ConnectWordsCard({ onRedirectFunction }: IPhrasesCart) {
  return (
    <Animated.View entering={FadeInUp.delay(300)}>
      <CardMatches
        title="Ligue as palavras"
        readerText="Ligue as palavras"
        navigationFunction={() =>
          onRedirectFunction({
            title: 'Ligue as palavras',
            description: 'Ligue as palavras para somar pontos',
            screen: 'connectWords',
            textSpeech:
              'Ligue as palavras para somar pontos. Cada resposta correta equivale á 1 ponto',
            score: SCORE_CONNECT_WORDS,
          })
        }
      >
        <Jupiter width={110} height={100} />
      </CardMatches>
    </Animated.View>
  )
}
