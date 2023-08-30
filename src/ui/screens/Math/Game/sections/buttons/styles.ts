import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alterOperation: {
    padding: 15,
    backgroundColor: colors['black-700'],
    borderRadius: 100,
  },
  alterOperationTransparent: {
    backgroundColor: colors['black-700'],
    opacity: 0,
    borderRadius: 50,
    padding: 10,
  },
  indexMath: {
    color: colors.white,
    fontSize: fontsSize.xlarge,
    fontWeight: 'bold',
  },
})
