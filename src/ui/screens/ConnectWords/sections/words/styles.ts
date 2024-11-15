import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  cardWord: {
    height: 60,
    width: 180,
    marginVertical: 8,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.gray['700'],
  },
  textWord: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xl,
    fontWeight: 'bold',
  },
})
