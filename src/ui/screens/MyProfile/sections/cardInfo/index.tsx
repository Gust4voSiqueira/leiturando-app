import { styles } from './styles'
import { Box, Text } from 'native-base'

interface ICardInfo {
  textInfo: string
  numbersInfo: string
}

export function CardInfo({ numbersInfo, textInfo }: ICardInfo) {
  return (
    <Box bg={'gray.700'} style={styles.cardInfoContainer}>
      <Text color={'gray.300'} style={styles.textInfo}>
        {textInfo}
      </Text>
      <Text color={'gray.100'} style={styles.numbersInfo}>
        {numbersInfo}
      </Text>
    </Box>
  )
}
