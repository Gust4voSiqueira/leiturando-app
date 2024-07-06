import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  container: {
    width: 320,
    borderRadius: 13,
    marginBottom: 20,

    padding: 15,
    maxWidth: '100%',
    backgroundColor: THEME.colors.gray['700'],
  },
})
