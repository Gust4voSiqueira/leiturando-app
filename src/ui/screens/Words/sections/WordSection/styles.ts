import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wordTextContainer: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    justifyContent: 'center',
  },
  wordText: {
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
})
