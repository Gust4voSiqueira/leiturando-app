import { styles } from './styles'
import { Box, Text } from 'native-base'

interface IWordSectionProps {
  word: string
  isError?: boolean
}

export function WordSection({ word, isError = false }: IWordSectionProps) {
  return (
    <Box
      bg={'gray.700'}
      style={[styles.wordTextContainer, isError && styles.error]}
    >
      <Text style={styles.wordText}>{word}</Text>
    </Box>
  )
}
