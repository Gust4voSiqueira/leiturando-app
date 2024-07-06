import { THEME } from '../../../../global/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wordsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: THEME.colors.gray[900],
  },
  wordsAndAudioContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 40,
  },
})
