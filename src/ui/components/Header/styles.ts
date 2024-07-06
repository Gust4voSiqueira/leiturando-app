import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '90%',
    top: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes['2xl'],
    fontWeight: 'bold',
  },
})
