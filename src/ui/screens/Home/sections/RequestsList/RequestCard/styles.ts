import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../../global/theme'

export const styles = StyleSheet.create({
  requestCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    maxWidth: 230,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 3,
    backgroundColor: THEME.colors.gray['700'],
    height: 80,
  },
  requestCardLoad: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    maxWidth: 230,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 3,
    backgroundColor: THEME.colors.gray['700'],
    height: 80,
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
    color: THEME.colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quantitiFriendsCommon: {
    color: THEME.colors.white,
    textAlign: 'center',
    fontSize: THEME.fontSizes['2xs'],
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  responseFriendButtonAccept: {
    backgroundColor: THEME.colors.green[700],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  responseFriendButtonReject: {
    backgroundColor: THEME.colors.red[600],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  requestSend: {
    backgroundColor: THEME.colors.gray[500],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  responseFriendText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes['2xs'],
  },
  load: {
    width: 5,
    alignItems: 'center',
  },
  buttonSubmittedRequest: {
    backgroundColor: THEME.colors.red['600'],
    paddingHorizontal: 8,
    marginHorizontal: 20,
    borderRadius: 4,
    padding: 2,
  },
  buttonSendRequest: {
    backgroundColor: THEME.colors.gray['500'],
    paddingHorizontal: 8,
    marginHorizontal: 20,
    borderRadius: 4,
    padding: 2,
  },
})
