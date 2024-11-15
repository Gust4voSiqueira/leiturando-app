import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  cardAudio: {
    height: 60,
    width: 90,
    marginVertical: 8,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.gray['700'],
  },
  selected: {
    borderWidth: 1,
    borderColor: THEME.colors.green['600'],
  },
})
