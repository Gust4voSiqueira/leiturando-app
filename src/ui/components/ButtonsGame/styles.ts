import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    width: '100%'
  },
  alterOperation: {
    padding: 15,
    borderRadius: 100,
    backgroundColor: THEME.colors.gray['700'],
  },
  alterOperationTransparent: {
    backgroundColor: THEME.colors.gray['700'],
    opacity: 0,
    borderRadius: 50,
    padding: 10,
  },
  indexMath: {
    paddingVertical: 10,
    color: THEME.colors.white,
    fontSize: THEME.fontSizes['2xl'],
    fontWeight: 'bold',
  },
  buttonStopContainer: {
    alignItems: 'center',
    marginTop: 10,
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
