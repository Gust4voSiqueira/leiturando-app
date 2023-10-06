import { styles } from './styles'
import { Box, Text } from 'native-base'

interface IWordSectionProps {
  word: string
}

export function WordSection({ word }: IWordSectionProps) {
  return (
    <Box bg={'gray.700'} style={styles.wordTextContainer}>
      <Text style={styles.wordText}>{word}</Text>
    </Box>
  )
}
