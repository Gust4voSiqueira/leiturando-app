import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  inputEditProfile: {
    backgroundColor: THEME.colors.gray['900'],
    borderWidth: 1,
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.white,
    borderRadius: 4,
    padding: 14,
    marginBottom: 8,
  },
})
