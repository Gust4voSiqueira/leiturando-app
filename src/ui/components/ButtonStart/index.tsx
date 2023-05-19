import { Pressable as ButtonReact, Text } from 'react-native'
import { styles } from './styles'

interface IButtonStartProps {
  onClickFunction?: () => void
}

export function ButtonStart({ onClickFunction }: IButtonStartProps) {
  return (
    <ButtonReact style={styles.buttonContainer} onPress={onClickFunction}>
      <Text style={styles.textButton}>Iniciar</Text>
    </ButtonReact>
  )
}
