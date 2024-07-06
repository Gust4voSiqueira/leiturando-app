import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: THEME.colors.gray['500'],
    width: '100%',
    padding: 6,
    borderRadius: 6,
  },
  textButton: {
    color: THEME.colors.white,
    fontWeight: '700',
    fontSize: THEME.fontSizes.md,
    textAlign: 'center',
  },
})
