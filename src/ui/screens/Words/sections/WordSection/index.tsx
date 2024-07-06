import { Text, View } from 'react-native'
import { styles } from './styles'

interface IWordSectionProps {
  word: string
  isError?: boolean
}

export function WordSection({ word, isError = false }: IWordSectionProps) {
  return (
    <View style={[styles.wordTextContainer, isError && styles.error]}>
      <Text style={styles.wordText}>{word}</Text>
    </View>
  )
}
