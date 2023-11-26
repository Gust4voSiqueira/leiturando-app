import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { styles } from './styles'
import { Box, Pressable, Text, theme } from 'native-base'

interface IButtonsSection {
  onAlterOperation: (newIndex: number) => void
  index: number
  totalIndex: number
  handleStopGame: () => void
}

export function ButtonsSection({
  index,
  onAlterOperation,
  totalIndex,
  handleStopGame,
}: IButtonsSection) {
  const stylesButtonPrevious =
    index - 1 >= 0 ? styles.alterOperation : styles.alterOperationTransparent

  return (
    <>
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

      <Pressable
        bg={'red.700'}
        px={8}
        py={2}
        borderRadius={'md'}
        onPress={handleStopGame}
      >
        <Text color={'white'} fontWeight={'bold'} fontSize={'md'}>
          Parar
        </Text>
      </Pressable>
    </>
  )
}
