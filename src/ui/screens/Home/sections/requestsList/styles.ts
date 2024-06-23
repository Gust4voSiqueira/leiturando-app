import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listRequestsContainer: {
    marginLeft: 'auto',
    marginRight: 10,
    marginTop: 90,
    alignItems: 'center',
    height: 360,
    borderRadius: 11,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  listRequestsTitle: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  viewAllFriends: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  viewAllFriendsText: {
    color: theme.colors.white,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  buttonCloseRequests: {
    position: 'absolute',
    right: 10,
    top: 10,
  }
})
