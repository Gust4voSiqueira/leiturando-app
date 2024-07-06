import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

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
    backgroundColor: THEME.colors.gray['700'],
  },
  textInfo: {
    fontWeight: '600',
    color: THEME.colors.gray['300'],
  },
  numbersInfo: {
    fontWeight: 'bold',
    fontSize: THEME.fontSizes.xl,
    color: THEME.colors.gray['100'],
  },
})
