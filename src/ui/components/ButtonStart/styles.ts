import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    padding: 6,
    borderRadius: 6,
    backgroundColor: colors['black-500'],
  },
  textButton: {
    color: colors.white,
    fontWeight: '700',
    fontSize: fontsSize.xsmall,
    textAlign: 'center',
  },
})
