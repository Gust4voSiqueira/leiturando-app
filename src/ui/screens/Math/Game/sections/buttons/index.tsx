import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { Pressable, Text, View } from 'react-native'
import { colors } from '../../../../../../../global/themes/default'
import { styles } from './styles'

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
    <View style={styles.buttonsContainer}>
      <Pressable
        style={stylesButtonPrevious}
        onPress={() => onAlterOperation(index - 1)}
      >
        <CaretLeft size={50} color={colors.white} />
      </Pressable>

      <Text style={styles.indexMath}>
        {index + 1}/{totalIndex}
      </Text>
      <Pressable
        style={styles.alterOperation}
        onPress={() => onAlterOperation(index + 1)}
      >
        {index !== 6 ? (
          <CaretRight size={50} color={colors.white} />
        ) : (
          <FlagCheckered size={50} color={colors.white} weight="fill" />
        )}
      </Pressable>
    </View>
  )
}
