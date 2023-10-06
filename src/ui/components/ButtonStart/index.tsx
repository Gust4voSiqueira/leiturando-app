import { Text } from 'react-native'
import { styles } from './styles'
import { Pressable } from 'native-base'

interface IButtonStartProps {
  onClickFunction?: () => void
}

export function ButtonStart({ onClickFunction }: IButtonStartProps) {
  return (
    <Pressable
      bg={'gray.500'}
      style={styles.buttonContainer}
      onPress={onClickFunction}
    >
      <Text style={styles.textButton}>Iniciar</Text>
    </Pressable>
  )
}
