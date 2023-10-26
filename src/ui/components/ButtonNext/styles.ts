import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    justifyContent: 'center',
  },
  textButton: {
    color: theme.colors.black,
    fontWeight: '700',
    fontSize: theme.fontSizes.md,
    textAlign: 'center',
  },
})
