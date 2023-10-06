import { CaretLeft, CaretRight, FlagCheckered } from 'phosphor-react-native'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { Button } from 'native-base'

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
  return (
    <View style={styles.buttonsContainer}>
      <Button
        opacity={indexWord - 1 >= 0 ? 1 : 0}
        bg={'gray.700'}
        borderRadius={50}
        onPress={() => onAlterWord(indexWord - 1)}
        _pressed={{
          backgroundColor: 'gray.700',
        }}
      >
        <CaretLeft size={45} color="#FFF" />
      </Button>

      <Text style={styles.textNumberWord}>
        {indexWord + 1}/{total}
      </Text>

      <Button
        bg={'gray.700'}
        borderRadius={50}
        onPress={() => onAlterWord(indexWord + 1)}
        _pressed={{
          backgroundColor: 'gray.700',
        }}
      >
        {indexWord === total - 1 ? (
          <FlagCheckered size={45} color="#FFF" weight="fill" />
        ) : (
          <CaretRight size={45} color="#FFF" />
        )}
      </Button>
    </View>
  )
}
