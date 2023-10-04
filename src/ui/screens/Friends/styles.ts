import { StyleSheet } from 'react-native'
import { colors } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  friendsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    backgroundColor: colors['black-900'],
  },
  scrollStyles: {
    width: '100%',
    height: '70%',
  },
})
