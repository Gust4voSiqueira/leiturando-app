import { theme } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  operationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: windowWidth,
  },
  operationText: {
    fontSize: theme.fontSizes['7xl'],
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  error: {
    fontSize: theme.fontSizes['7xl'],
    color: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.red[600],
  },
  lineResult: {
    height: 1.5,
    width: '70%',
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
  line1container: {
    flexDirection: 'row',
  },
  line2container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  simbol: {
    fontSize: theme.fontSizes['7xl'],
    fontWeight: 'bold',
    opacity: 0,
  },
})
