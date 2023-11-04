import { CardMatches } from '../../../../components'
import Words from '../../../../../../assets/words.svg'
import { IOnRedirectProps } from '../..'
import Animated, { FadeInUp } from 'react-native-reanimated'

interface IWordsCard {
  onRedirectFunction: ({
    title,
    description,
    screen,
    textSpeech,
  }: IOnRedirectProps) => void
}

export function WordsCard({ onRedirectFunction }: IWordsCard) {
  return (
    <Animated.View entering={FadeInUp.delay(200)}>
      <CardMatches
        title="Palavras"
        readerText="Modo Palavras"
        navigationFunction={() =>
          onRedirectFunction({
            title: 'Palavras',
            description: 'Leia as palavras para somar pontos',
            screen: 'words',
            textSpeech: 'Leia as palavras para somar pontos',
          })
        }
      >
        <Words width={110} height={100} />
      </CardMatches>
    </Animated.View>
  )
}
