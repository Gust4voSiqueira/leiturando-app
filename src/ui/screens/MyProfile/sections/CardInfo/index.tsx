import { Text, View } from 'react-native'
import { styles } from './styles'

interface ICardInfo {
  textInfo: string
  numbersInfo: string
}

export function CardInfo({ numbersInfo, textInfo }: ICardInfo) {
  return (
    <View style={styles.cardInfoContainer}>
      <Text style={styles.textInfo}>{textInfo}</Text>
      <Text style={styles.numbersInfo}>{numbersInfo}</Text>
    </View>
  )
}
