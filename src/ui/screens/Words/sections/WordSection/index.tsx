import { Text, View } from 'react-native'
import { styles } from './styles'

interface IWordSectionProps {
  word: String
}

export function WordSection({ word }: IWordSectionProps) {
  // function capitalizeFirstLetter(word: String) {
  //   console.log(word)
  //   return word.charAt(0).toUpperCase() + word.slice(1)
  // }

  return (
    <View style={styles.wordTextContainer}>
      <Text style={styles.wordText}>{word}</Text>
    </View>
  )
}
