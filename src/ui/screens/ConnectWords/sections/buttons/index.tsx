import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { View } from 'react-native'
import { styles } from './styles'
import { Button, Pressable, Text, theme } from 'native-base'

interface IButtonsSection {
  nextIndexFunction: (newIndex: number) => void
  index: number
  totalIndex: number
  handleStopGame: () => void
}

export function ButtonsSection({
  index,
  nextIndexFunction,
  totalIndex,
  handleStopGame,
}: IButtonsSection) {
  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button
          padding={15}
          opacity={index - 1 >= 0 ? 1 : 0}
          backgroundColor={'gray.700'}
          borderRadius={100}
          onPress={() => nextIndexFunction(index - 1)}
        >
          <CaretLeft size={50} color={theme.colors.white} />
        </Button>

        <Text style={styles.indexMath}>
          {index + 1}/{totalIndex}
        </Text>

        <Button
          padding={15}
          backgroundColor={'gray.700'}
          borderRadius={100}
          onPress={() => nextIndexFunction(index + 1)}
        >
          {index !== 4 ? (
            <CaretRight size={50} color={theme.colors.white} />
          ) : (
            <FlagCheckered size={50} color={theme.colors.white} weight="fill" />
          )}
        </Button>
      </View>
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
