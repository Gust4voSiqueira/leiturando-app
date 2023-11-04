import { Text, View } from 'react-native'
import { styles } from './styles'
import { IResponses } from '../..'
import { Button } from 'native-base'
import { useEffect, useState } from 'react'

interface IWord {
  id: number
  word: string
}

interface IWordsToConnectSection {
  words: IWord[]
  onSelectWord: (word: string) => void
  selectedWords: IResponses[]
}

export function WordsSection({
  words,
  onSelectWord,
  selectedWords,
}: IWordsToConnectSection) {
  const [scrambledWords, setScrambledWords] = useState([])

  function isSelectedWord(word: string) {
    return selectedWords.find((selected) => selected.response === word)
  }

  function shuffleArray(words: IWord[]) {
    const newWords = [...words]
    for (let i = newWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newWords[i], newWords[j]] = [newWords[j], newWords[i]]
    }
    return newWords
  }

  useEffect(() => {
    setScrambledWords(shuffleArray(words))
  }, [words])

  return (
    <View>
      {scrambledWords.map((word) => {
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
