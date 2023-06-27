import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  wordTextContainer: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    backgroundColor: colors['black-700'],
    justifyContent: 'center',
  },
  wordText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontsSize.xmedium,
    fontWeight: 'bold',
  },
})
