import { Pressable, Text } from 'react-native'
import { styles } from './styles'

interface IButtonNextProps {
  onClickFunction?: (url: string) => void
  text: string
}

export function ButtonNext({ onClickFunction, text }: IButtonNextProps) {
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => onClickFunction('/Words')}
    >
      <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}
