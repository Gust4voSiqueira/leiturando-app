import { LegacyRef, forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles'

type Props = TextInputProps & {
  errorMessage?: string | null
  isErrors: boolean
}

export const InputRegister = forwardRef(
  ({ errorMessage = null, isErrors, ...rest }: Props, ref: LegacyRef<TextInput>) => {
    const invalid = !!errorMessage || isErrors

    return (
      <TextInput
        style={[styles.input, invalid && styles.inputError]}
        autoCapitalize="none"
        ref={ref}
        {...rest}
      />
    )
  },
)
