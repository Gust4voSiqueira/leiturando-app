import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  wordsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.colors.gray[900],
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '70%'
  }
})
