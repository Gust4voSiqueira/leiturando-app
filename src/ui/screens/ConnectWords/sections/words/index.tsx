import { Text, View } from 'react-native'
import { styles } from './styles'
import { IResponses } from '../..'
import { Button } from 'native-base'

interface IWordsToConnectSection {
  words: {
    id: number
    word: string
  }[]
  onSelectWord: (word: string) => void
  selectedWords: IResponses[]
}

export function WordsSection({
  words,
  onSelectWord,
  selectedWords,
}: IWordsToConnectSection) {
  function isSelectedWord(word: string) {
    return selectedWords.find((selected) => selected.response === word)
  }

  return (
    <View>
      {words.map((word) => {
        return isSelectedWord(word.word) ? (
          <Button
            bg={'gray.700'}
            _pressed={{
              bg: 'gray.700',
            }}
            style={styles.cardWord}
            key={word.id}
          >
            <Text style={styles.textWord} />
          </Button>
        ) : (
          <Button
            bg={'gray.700'}
            _pressed={{
              bg: 'gray.700',
            }}
            style={styles.cardWord}
            key={word.id}
            onPress={() => onSelectWord(word.word)}
          >
            <Text style={styles.textWord}>{word.word}</Text>
          </Button>
        )
      })}
    </View>
  )
}
