import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttonNext: {
    backgroundColor: colors['black-700'],
    borderRadius: 50,
    padding: 10,
  },
  buttonNextTransparent: {
    backgroundColor: colors['black-700'],
    opacity: 0,
    borderRadius: 50,
    padding: 10,
  },
  textNumberWord: {
    color: colors.white,
    fontSize: fontsSize.large,
    fontWeight: 'bold',
  },
})
