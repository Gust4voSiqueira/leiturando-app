import { ActivityIndicator, Text } from 'react-native'
import { styles } from './styles'
import { IPressableProps, Pressable, theme } from 'native-base'

interface IButtonNextProps extends IPressableProps {
  text: string
  isDisabled?: boolean
}

export function ButtonNext({
  text,
  isDisabled = false,
  ...rest
}: IButtonNextProps) {
  return (
    <Pressable
      style={styles.buttonContainer}
      bgColor={'green.600'}
      disabled={isDisabled}
      {...rest}
    >
      {!isDisabled ? (
        <Text style={styles.textButton}>{text}</Text>
      ) : (
        <ActivityIndicator size="small" color={theme.colors.black} />
      )}
    </Pressable>
  )
}
