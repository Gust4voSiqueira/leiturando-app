import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
  },
  resultText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  scoreText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes['2xl'],
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 100,
    marginTop: 10,
  },
})
