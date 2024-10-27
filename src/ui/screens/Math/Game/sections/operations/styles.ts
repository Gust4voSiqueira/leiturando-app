import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../../global/theme'

export const styles = StyleSheet.create({
  operationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: THEME.colors.gray['900'],
  },
  operationText: {
    fontSize: THEME.fontSizes['7xl'],
    color: THEME.colors.white,
    fontWeight: 'bold',
    paddingLeft: 4
  },
  error: {
    fontSize: THEME.fontSizes['7xl'],
    color: THEME.colors.white,
    borderWidth: 1,
    borderColor: THEME.colors.red[600],
  },
  lineResult: {
    height: 1.5,
    width: '70%',
    backgroundColor: THEME.colors.white,
    borderRadius: 5,
  },
  line1container: {
    paddingLeft: 40,
  },
  line2container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputResponse: {
    backgroundColor: THEME.colors.gray['700'],
    width: '70%',
    height: 120,
    marginTop: 16,
    fontSize: THEME.fontSizes['7xl'],
    color: THEME.colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0,
  },
})
