import { Text, View } from 'react-native'
import { styles } from './styles'

interface IWordSectionProps {
  word: String
}

export function WordSection({ word }: IWordSectionProps) {
  return (
    <View style={styles.wordTextContainer}>
      <Text style={styles.wordText}>{word}</Text>
    </View>
  )
}
