import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  theme,
} from 'native-base'
import { Platform } from 'react-native'

type Props = IInputProps & {
  errorMessage?: string | null
  isErrors: boolean
}

export function InputRegister({
  errorMessage = null,
  isInvalid,
  isErrors,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg={theme.colors.white}
        borderRadius={4}
        color={theme.colors.gray[900]}
        width={'100%'}
        height={Platform.OS === 'ios' ? 45 : 40}
        fontSize={theme.fontSizes.sm}
        borderWidth={!isErrors ? 1 : 2}
        borderColor={!isErrors ? theme.colors.white : theme.colors.red[700]}
        placeholder="Email"
        autoCapitalize="none"
        _focus={{
          bg: theme.colors.white,
          borderColor: !isErrors ? theme.colors.white : theme.colors.red[700],
        }}
        {...rest}
      />
    </FormControl>
  )
}
