import React from 'react'
import { CardMatches } from '../../../../components'
import Shields from '../../../../../../assets/shield.svg'
import { IOnRedirectProps } from '../..'

interface IShieldsCard {
  onRedirectFunction: ({ title, description, screen }: IOnRedirectProps) => void
}

export function ShieldsCard({ onRedirectFunction }: IShieldsCard) {
  return (
    <CardMatches
      title="Imagens"
      readerText="Modo Imagens"
      navigationFunction={() =>
        onRedirectFunction({
          title: 'Palavras',
          description: 'Descreva as imagens o mais rápido que conseguir!',
          screen: 'Shields',
        })
      }
    >
      <Shields width={110} height={100} />
    </CardMatches>
  )
}
