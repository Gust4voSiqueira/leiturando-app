import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  cardWord: {
    height: 60,
    width: 180,
    marginVertical: 8,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textWord: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
  },
})
