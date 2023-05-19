import { Text, View } from 'react-native'

import { styles } from './styles'
import { Check, X } from 'phosphor-react-native'
import { colors } from '../../../../../../global/themes/default'

interface ICardResult {
  isCorrect: boolean
  word: string
}

export function CardResult({ isCorrect, word }: ICardResult) {
  return (
    <View style={styles.cardContainer}>
      <View style={{ width: 30, height: 30 }}></View>

      <Text style={styles.textResume}>{word}</Text>

      <View
        style={
          isCorrect ? styles.circleResultCorrect : styles.circleResultIncorrect
        }
      >
        {isCorrect ? (
          <Check size={25} color={colors.white} weight="bold" />
        ) : (
          <X size={25} color={colors.white} weight="bold" />
        )}
      </View>
    </View>
  )
}
