import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  wordTextContainer: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    justifyContent: 'center',
    backgroundColor: THEME.colors.gray[700],
  },
  wordText: {
    textAlign: 'center',
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xl,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  error: {
    borderWidth: 1,
    borderColor: THEME.colors.red[600],
  },
})
