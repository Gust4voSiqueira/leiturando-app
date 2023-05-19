import { Platform, StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  listRequestsContainer: {
    position: 'absolute',
    alignItems: 'center',
    right: 5,
    top: 150,
    maxWidth: 230,
    height: 300,
    borderRadius: 11,
    paddingVertical: 13,
    paddingHorizontal: 10,
    backgroundColor: colors['black-500'],
  },
  inputSearchUsers: {
    backgroundColor: colors['black-700'],
    height: Platform.OS === 'ios' ? 30 : 25,
    color: colors.white,
    paddingLeft: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors['black-900'],
    fontSize: fontsSize.xmini,
  },
  inputSearchUsersSelected: {
    backgroundColor: colors['black-700'],
    width: '100%',
    height: Platform.OS === 'ios' ? 30 : 25,
    color: colors.white,
    paddingLeft: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors['green-600'],
    fontSize: fontsSize.xmini,
  },
  listRequestsTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  indicatorIcon: {
    position: 'absolute',
    backgroundColor: colors['black-500'],
    top: -13,
    right: 45,

    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 13,

    borderLeftColor: colors['black-700'],
    borderRightColor: colors['black-700'],
    borderBottomColor: colors['black-500'],

    width: 0,
    height: 0,
  },
})
