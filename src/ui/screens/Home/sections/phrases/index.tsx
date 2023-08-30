import React from 'react'
import { CardMatches } from '../../../../components'
import Jupiter from '../../../../../../assets/jupiter.svg'
import { IOnRedirectProps } from '../..'

interface IPhrasesCart {
  onRedirectFunction: ({
    title,
    description,
    screen,
    textSpeech,
  }: IOnRedirectProps) => void
}

export function PhrasesCard({ onRedirectFunction }: IPhrasesCart) {
  return (
    <CardMatches
      title="Frases"
      readerText="Modo Frases"
      navigationFunction={() =>
        onRedirectFunction({
          title: 'Frases',
          description: 'Leia as frases corretamente para somar pontos',
          screen: 'Phrases',
          textSpeech: 'Leia as frases corretamente para somar pontos',
        })
      }
    >
      <Jupiter width={110} height={100} />
    </CardMatches>
  )
}
