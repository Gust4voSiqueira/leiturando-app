import { StyleSheet } from 'react-native'
import { theme } from 'native-base'

export const styles = StyleSheet.create({
  cardFriendsContainer: {
    width: '85%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  imageUserRequest: {
    borderRadius: 50,
    marginRight: 15,
  },
  infoRequestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameUserRequest: {
    color: theme.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quantitiFriendsCommon: {
    color: theme.colors.white,
    textAlign: 'center',
    fontSize: theme.fontSizes['2xs'],
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  responseFriendButtonAccept: {
    backgroundColor: theme.colors.green[700],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  responseFriendButtonReject: {
    backgroundColor: theme.colors.red[600],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  requestSend: {
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelRequestButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: theme.colors.red[600],
  },
  responseFriendButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  responseFriendText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes['2xs'],
  },
  load: {
    width: 5,
    alignItems: 'center',
  },
})
