import { StyleSheet } from 'react-native'
import { colors } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    backgroundColor: colors['black-900'],
  },
})
