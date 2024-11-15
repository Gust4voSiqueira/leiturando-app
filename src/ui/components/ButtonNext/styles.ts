import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    justifyContent: 'center',
    backgroundColor: THEME.colors.green['600'],
  },
  textButton: {
    color: THEME.colors.black,
    fontWeight: '700',
    fontSize: THEME.fontSizes.md,
    textAlign: 'center',
  },
})
