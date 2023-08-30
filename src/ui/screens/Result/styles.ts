import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

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
    color: colors.white,
    fontSize: fontsSize.xmedium,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  scoreText: {
    color: colors.white,
    fontSize: fontsSize.xlarge,
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
