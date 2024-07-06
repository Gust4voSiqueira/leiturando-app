import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  listRequestsContainer: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 110,
    alignItems: 'center',
    height: 360,
    borderRadius: 11,
    paddingVertical: 13,
    paddingHorizontal: 10,
    backgroundColor: THEME.colors.gray['500'],
    width: 200,
  },
  listRequestsTitle: {
    color: THEME.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: THEME.colors.gray['700'],
    borderWidth: 0,
    color: THEME.colors.white,
    padding: 4,
  },
  listRequestsCard: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllFriends: {
    backgroundColor: THEME.colors.gray['500'],
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  viewAllFriendsText: {
    color: THEME.colors.white,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  buttonCloseRequests: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textSearching: {
    color: THEME.colors.white,
    marginTop: 8,
  },
})
