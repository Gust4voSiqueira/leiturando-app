import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  cardInfoContainer: {
    width: 320,
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 2.5,
  },
  textInfo: {
    fontWeight: '600',
  },
  numbersInfo: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.xl,
  },
})
