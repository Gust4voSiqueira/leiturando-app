import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  pressableContainer: {
    backgroundColor: THEME.colors.gray['700'],
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  pressableContainerFocus: {
    borderWidth: 1,
    borderColor: THEME.colors.red['600'],
  },
})
