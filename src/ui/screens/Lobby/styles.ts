import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  textLobby: {
    color: colors.white,
    fontSize: fontsSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 310,
  },
  buttonStart: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    backgroundColor: colors['black-700'],
    justifyContent: 'center',
    marginTop: 40,
  },
  textStart: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontsSize.xmedium,
    fontWeight: 'bold',
  },
  LobbyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageLobby: {
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 45,
    width: '100%',
  },
})
