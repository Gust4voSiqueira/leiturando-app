import { StyleSheet } from 'react-native'
import { colors } from './themes/default'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['black-900'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    fontFamily: 'Nunito',
  },
})
