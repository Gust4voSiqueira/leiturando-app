import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  requestCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors['black-700'],
    paddingVertical: 10,
    maxWidth: 230,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 3,
  },
  imageUserRequest: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 5,
  },
  infoRequestContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameUserRequest: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  quantitiFriendsCommon: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontsSize.small,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  responseFriendButtonAccept: {
    backgroundColor: colors['green-700'],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  responseFriendButtonReject: {
    backgroundColor: colors['red-600'],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  requestSend: {
    backgroundColor: colors['black-500'],
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 5,

    alignItems: 'center',
  },
  responseFriendButton: {
    backgroundColor: colors['black-500'],
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  responseFriendText: {
    color: colors.white,
    fontSize: fontsSize.small,
  },
})
