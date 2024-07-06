import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { THEME } from '../../../../global/theme'
import { styles } from './styles'

type Props = TextInputProps & {
  errorMessage?: string | null
  isErrors: boolean
}

export const InputEditProfile = forwardRef(
  ({ errorMessage = null, isErrors, ...rest }: Props) => {
    const invalid = !!errorMessage || isErrors

    return (
      <TextInput
        style={[
          styles.inputEditProfile,
          {
            borderColor: !invalid
              ? THEME.colors.gray['900']
              : THEME.colors.red['600'],
          },
        ]}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor={THEME.colors.gray['300']}
        {...rest}
      />
    )
  },
)
