import React from 'react'
import { CardMatches } from '../../../../components'
import Shields from '../../../../../../assets/shield.svg'
import { IOnRedirectProps } from '../..'

interface IShieldsCard {
  onRedirectFunction: ({ title, description, screen }: IOnRedirectProps) => void
}

export function MathCard({ onRedirectFunction }: IShieldsCard) {
  return (
    <CardMatches
      title="Matemática"
      readerText="Modo Matemática"
      navigationFunction={() =>
        onRedirectFunction({
          title: 'Matemática',
          description: 'Resolva as operações corretamente para somar pontos',
          screen: 'Operations',
          textSpeech: 'Resolva as operações corretamente para somar pontos',
        })
      }
    >
      <Shields width={110} height={100} />
    </CardMatches>
  )
}
