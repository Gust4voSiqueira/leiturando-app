import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

interface IButtonsSectionProps {
  onAlterWord: (indexWord: number) => void
  indexWord: number
  total: number
}

export function ButtonsSection({
  onAlterWord,
  indexWord,
  total,
}: IButtonsSectionProps) {
  const stylesButtonPrevious =
    indexWord - 1 >= 0 ? styles.buttonNext : styles.buttonNextTransparent

  return (
    <View style={styles.buttonsContainer}>
      <Pressable
        style={stylesButtonPrevious}
        onPress={() => onAlterWord(indexWord - 1)}
      >
        <CaretLeft size={45} color="#FFF" />
      </Pressable>

      <Text style={styles.textNumberWord}>
        {indexWord + 1}/{total}
      </Text>

      <Pressable
        style={styles.buttonNext}
        onPress={() => onAlterWord(indexWord + 1)}
      >
        {indexWord === total - 1 ? (
          <FlagCheckered size={45} color="#FFF" weight="fill" />
        ) : (
          <CaretRight size={45} color="#FFF" />
        )}
      </Pressable>
    </View>
  )
}
