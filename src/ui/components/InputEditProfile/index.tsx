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

export function InputEditProfile({
  errorMessage = null,
  isInvalid,
  isErrors,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={2}>
      <NativeBaseInput
        bg={'gray.900'}
        borderRadius={4}
        color={theme.colors.white}
        width={'90%'}
        height={Platform.OS === 'ios' ? 45 : 12}
        fontSize={theme.fontSizes.sm}
        borderWidth={!isErrors ? 1 : 2}
        borderColor={!isErrors ? 'gray.900' : theme.colors.red[700]}
        placeholder="Email"
        autoCapitalize="none"
        _focus={{
          bg: 'gray.900',
          borderColor: !isErrors ? 'green.600' : theme.colors.red[700],
        }}
        {...rest}
      />
    </FormControl>
  )
}
