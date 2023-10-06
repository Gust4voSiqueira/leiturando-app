import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    padding: 6,
    borderRadius: 6,
  },
  textButton: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: theme.fontSizes.md,
    textAlign: 'center',
  },
})
