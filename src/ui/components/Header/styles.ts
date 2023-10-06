import { StyleSheet } from 'react-native'
import { theme } from 'native-base'

export const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '90%',
    top: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: theme.colors.white,
    fontSize: theme.fontSizes['2xl'],
    fontWeight: 'bold',
  },
})
