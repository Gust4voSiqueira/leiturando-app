import React from 'react'
import { CardMatches } from '../../../../components'
import Shields from '../../../../../../assets/shield.svg'
import { IOnRedirectProps } from '../..'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { SCORE_MATH } from '../../../../../utils/Scores'

interface IShieldsCard {
  onRedirectFunction: ({ title, description, screen }: IOnRedirectProps) => void
}

export function MathCard({ onRedirectFunction }: IShieldsCard) {
  return (
    <Animated.View entering={FadeInUp.delay(400)}>
      <CardMatches
        title="Matemática"
        readerText="Modo Matemática"
        navigationFunction={() =>
          onRedirectFunction({
            title: 'Matemática',
            description: 'Resolva as operações para somar pontos',
            screen: 'operations',
            textSpeech:
              'Resolva as operações para somar pontos. Cada resposta correta equivale á 3 ponto',
            score: SCORE_MATH,
          })
        }
      >
        <Shields width={110} height={100} />
      </CardMatches>
    </Animated.View>
  )
}
