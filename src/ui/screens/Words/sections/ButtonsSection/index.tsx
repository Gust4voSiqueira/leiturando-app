import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

interface IButtonsSectionProps {
  onAlterWord: (indexWord: number) => void
  indexWord: number
}

export function ButtonsSection({
  onAlterWord,
  indexWord,
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

      <Text style={styles.textNumberWord}>{indexWord + 1}/10</Text>

      <Pressable
        style={styles.buttonNext}
        onPress={() => onAlterWord(indexWord + 1)}
      >
        {indexWord < 9 ? (
          <CaretRight size={45} color="#FFF" />
        ) : (
          <FlagCheckered size={45} color="#FFF" />
        )}
      </Pressable>
    </View>
  )
}
