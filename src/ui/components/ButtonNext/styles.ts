import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: colors['green-600'],
    justifyContent: 'center',
  },
  textButton: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontsSize.medium,
    textAlign: 'center',
  },
})
