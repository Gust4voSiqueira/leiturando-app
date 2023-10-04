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
          description: 'Resolva as operações para somar pontos',
          screen: 'operations',
          textSpeech: 'Resolva as operações para somar pontos',
        })
      }
    >
      <Shields width={110} height={100} />
    </CardMatches>
  )
}
