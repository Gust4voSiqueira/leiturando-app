import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttonNextTransparent: {
    backgroundColor: theme.colors.gray[700],
    opacity: 0,
    borderRadius: 50,
    padding: 10,
  },
  textNumberWord: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
  },
})
