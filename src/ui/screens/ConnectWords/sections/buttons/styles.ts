import { StyleSheet } from 'react-native'
import { theme } from 'native-base'

export const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  nextButton: {
    padding: 15,
    backgroundColor: theme.colors.gray[700],
    borderRadius: 100,
  },
  nextButtonTransparent: {
    backgroundColor: theme.colors.gray[700],
    opacity: 0,
    borderRadius: 50,
    padding: 10,
  },
  indexMath: {
    paddingVertical: 18,
    color: theme.colors.white,
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 'bold',
  },
})
