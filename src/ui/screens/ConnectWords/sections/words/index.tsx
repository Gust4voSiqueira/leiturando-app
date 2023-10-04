import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { IResponses } from '../..'

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
          <Pressable style={styles.cardWord} key={word.id}>
            <Text style={styles.textWord} />
          </Pressable>
        ) : (
          <Pressable
            style={styles.cardWord}
            key={word.id}
            onPress={() => onSelectWord(word.word)}
          >
            <Text style={styles.textWord}>{word.word}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}
