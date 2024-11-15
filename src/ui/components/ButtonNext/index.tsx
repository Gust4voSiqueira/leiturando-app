import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from 'react-native'
import { styles } from './styles'
import { THEME } from '../../../../global/theme'

interface IButtonNextProps extends PressableProps {
  text: string
  isDisabled?: boolean
}

export function ButtonNext({
  text,
  isDisabled = false,
  ...rest
}: IButtonNextProps) {
  return (
    <Pressable style={styles.buttonContainer} disabled={isDisabled} {...rest}>
      {!isDisabled ? (
        <Text style={styles.textButton}>{text}</Text>
      ) : (
        <ActivityIndicator size="small" color={THEME.colors.black} />
      )}
    </Pressable>
  )
}
