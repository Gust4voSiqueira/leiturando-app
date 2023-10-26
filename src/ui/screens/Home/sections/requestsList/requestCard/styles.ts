import { StyleSheet } from 'react-native'
import { theme } from 'native-base'

export const styles = StyleSheet.create({
  requestCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    maxWidth: 230,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 3,
  },
  requestCardLoad: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    maxWidth: 230,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 3,
  },
  imageUserRequest: {
    borderRadius: 50,
    marginRight: 5,
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
    backgroundColor: theme.colors.gray[500],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,
    alignItems: 'center',
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
