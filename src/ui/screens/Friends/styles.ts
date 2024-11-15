import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  friendsContainer: {
    backgroundColor: THEME.colors.gray['900'],
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  scrollStyles: {
    width: '100%',
    height: '70%',
  },
})
