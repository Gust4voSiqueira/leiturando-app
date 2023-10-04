import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardFriendsContainer: {
    width: '85%',
    height: 100,
    alignItems: 'center',
    backgroundColor: colors['black-700'],
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
  cancelRequestButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: colors['red-600'],
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
  load: {
    width: 5,
    alignItems: 'center',
  },
})
