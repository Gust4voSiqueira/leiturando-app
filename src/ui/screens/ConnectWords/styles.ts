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
  buttonsContainer: {
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  indexWord: {
    paddingBottom: 20,
    color: THEME.colors.white,
    fontSize: THEME.fontSizes['2xl'],
    fontWeight: 'bold',
  },
  stopButton: {
    backgroundColor: THEME.colors.red['600'],
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 8,
  },
  textStop: {
    color: THEME.colors.white,
    fontWeight: 'bold',
    fontSize: THEME.fontSizes.md,
  },
})
