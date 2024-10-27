import { Platform, StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  input: {
    backgroundColor: THEME.colors.white,
    borderRadius: 8,
    color: THEME.colors.gray['900'],
    height: Platform.OS === 'ios' ? 50 : 40,
    fontSize: THEME.fontSizes.sm,
    borderWidth: 2,
    borderColor: THEME.colors.red['700'],
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  inputError: {
    borderWidth: 2,
    borderColor: THEME.colors.red['600'],
  },
})
