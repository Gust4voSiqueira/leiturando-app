import { Pressable, Text } from 'react-native'
import { styles } from './styles'

interface IButtonStartProps {
  onClickFunction?: () => void
}

export function ButtonStart({ onClickFunction }: IButtonStartProps) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onClickFunction}>
      <Text style={styles.textButton}>Iniciar</Text>
    </Pressable>
  )
}
