import React from 'react'
import { CardMatches } from '../../../../components'
import Words from '../../../../../../assets/words2.svg'
import { IOnRedirectProps } from '../..'

interface IWordsCart {
  onRedirectFunction: ({
    title,
    description,
    screen,
    textSpeech,
  }: IOnRedirectProps) => void
}

export function WordsCard({ onRedirectFunction }: IWordsCart) {
  return (
    <CardMatches
      title="Palavras"
      readerText="Modo Palavras"
      navigationFunction={() =>
        onRedirectFunction({
          title: 'Palavras',
          description: 'Nomeie as palavras o mais rápido que conseguir!',
          screen: 'Words',
          textSpeech: 'Nomeie as palavras o mais rápido que conseguir',
        })
      }
    >
      <Words width={110} height={100} />
    </CardMatches>
  )
}
