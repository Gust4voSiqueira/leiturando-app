import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardWord: {
    backgroundColor: colors['black-700'],
    height: 60,
    width: 180,
    marginVertical: 8,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textWord: {
    color: colors.white,
    fontSize: fontsSize.large,
    fontWeight: 'bold',
  },
})
