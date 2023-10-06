import { Pressable, Text } from 'react-native'
import { styles } from './styles'
import { IPressableProps } from 'native-base'

interface IButtonNextProps extends IPressableProps {
  text: string
}

export function ButtonNext({ text, ...rest }: IButtonNextProps) {
  return (
    <Pressable style={styles.buttonContainer} {...rest}>
      <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}
