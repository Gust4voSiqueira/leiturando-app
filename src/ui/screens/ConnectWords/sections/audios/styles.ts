import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardAudio: {
    backgroundColor: colors['black-700'],
    height: 60,
    width: 90,
    marginVertical: 8,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderWidth: 1,
    borderColor: colors['green-600'],
  },
})
