import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { styles } from './styles'
import { Box, Pressable, theme } from 'native-base'
import { Text } from 'react-native'

interface IButtonsSection {
  onAlterOperation: (newIndex: number) => void
  index: number
  totalIndex: number
}

export function ButtonsSection({
  index,
  onAlterOperation,
  totalIndex,
}: IButtonsSection) {
  const stylesButtonPrevious =
    index - 1 >= 0 ? styles.alterOperation : styles.alterOperationTransparent

  return (
    <Box style={styles.buttonsContainer} w={'100%'} paddingX={10}>
      <Pressable
        bg={'gray.700'}
        style={stylesButtonPrevious}
        onPress={() => onAlterOperation(index - 1)}
      >
        <CaretLeft size={50} color={theme.colors.white} />
      </Pressable>

      <Text style={styles.indexMath}>
        {index + 1}/{totalIndex}
      </Text>

      <Pressable
        bg={'gray.700'}
        style={styles.alterOperation}
        onPress={() => onAlterOperation(index + 1)}
      >
        {index !== 6 ? (
          <CaretRight size={50} color={theme.colors.white} />
        ) : (
          <FlagCheckered size={50} color={theme.colors.white} weight="fill" />
        )}
      </Pressable>
    </Box>
  )
}
