import { Text, View } from 'react-native'

import { styles } from './styles'
import { Check, X } from 'phosphor-react-native'
import { theme } from 'native-base'

interface ICardResult {
  isCorrect: boolean
  content: string
}

export function CardResult({ isCorrect, content }: ICardResult) {
  return (
    <View style={styles.cardContainer}>
      <View style={{ width: 30, height: 30 }}></View>

      <Text style={styles.textResume}>{content}</Text>

      <View
        style={
          isCorrect ? styles.circleResultCorrect : styles.circleResultIncorrect
        }
      >
        {isCorrect ? (
          <Check size={25} color={theme.colors.white} weight="bold" />
        ) : (
          <X size={25} color={theme.colors.white} weight="bold" />
        )}
      </View>
    </View>
  )
}
