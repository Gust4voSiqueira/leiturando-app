import { Dimensions, StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../../global/themes/default'

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  operationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: windowWidth,
  },
  operationText: {
    fontSize: fontsSize.xxxlarge,
    color: colors.white,
    fontWeight: 'bold',
  },
  error: {
    fontSize: fontsSize.xxxlarge,
    color: colors.white,
    borderWidth: 1,
    borderColor: colors['red-600'],
  },
  lineResult: {
    height: 1.5,
    width: '70%',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  resultOperation: {
    width: '70%',
    height: 120,
    marginTop: 15,
    backgroundColor: colors['black-700'],

    fontSize: fontsSize.xxxlarge,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 5,
  },
  line1container: {
    flexDirection: 'row',
  },
  line2container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  simbol: {
    fontSize: fontsSize.xxxlarge,
    fontWeight: 'bold',
    opacity: 0,
  },
})
