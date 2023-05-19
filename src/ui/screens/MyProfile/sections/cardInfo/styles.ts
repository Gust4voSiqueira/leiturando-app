import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardInfoContainer: {
    width: 320,
    backgroundColor: colors['black-700'],
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 2.5,
  },
  textInfo: {
    color: colors['black-300'],
    fontWeight: '600',
    // fontSize: fontsSize.small,
  },
  numbersInfo: {
    color: colors['white-300'],
    fontWeight: 'bold',
    fontSize: fontsSize.large,
  },
})
