import { StyleSheet } from 'react-native'
import { theme } from 'native-base'

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
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  scoreText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes['2xl'],
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
