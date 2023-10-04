import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { colors } from '../../../../../../global/themes/default'

interface IButtonsSection {
  nextIndexFunction: (newIndex: number) => void
  index: number
  totalIndex: number
}

export function ButtonsSection({
  index,
  nextIndexFunction,
  totalIndex,
}: IButtonsSection) {
  const stylesButtonPrevious =
    index - 1 >= 0 ? styles.nextButton : styles.nextButtonTransparent

  return (
    <View style={styles.buttonsContainer}>
      <Pressable
        style={stylesButtonPrevious}
        onPress={() => nextIndexFunction(index - 1)}
      >
        <CaretLeft size={50} color={colors.white} />
      </Pressable>

      <Text style={styles.indexMath}>
        {index + 1}/{totalIndex}
      </Text>

      <Pressable
        style={styles.nextButton}
        onPress={() => nextIndexFunction(index + 1)}
      >
        {index !== 4 ? (
          <CaretRight size={50} color={colors.white} />
        ) : (
          <FlagCheckered size={50} color={colors.white} weight="fill" />
        )}
      </Pressable>
    </View>
  )
}
