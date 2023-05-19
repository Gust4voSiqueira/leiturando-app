import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors['black-700'],
    width: '95%',
    height: 45,
    marginVertical: 5,
    borderRadius: 7,
    paddingHorizontal: 7,
  },
  textResume: {
    fontSize: fontsSize.xmedium,
    color: colors.white,
    fontWeight: '600',
    width: '80%',
    textAlign: 'center',
  },
  circleResultCorrect: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: colors['green-600'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleResultIncorrect: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: colors['red-600'],
    justifyContent: 'center',
    alignItems: 'center',
  },
})
