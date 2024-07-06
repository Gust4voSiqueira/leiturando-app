import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  cardFriendsContainer: {
    width: '85%',
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: THEME.colors.gray['700'],
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
    backgroundColor: THEME.colors.red[600],
  },
  responseFriendButton: {
    backgroundColor: THEME.colors.gray['500'],
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  responseFriendText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes['2xs'],
  },
  load: {
    width: 5,
    alignItems: 'center',
  },
})
