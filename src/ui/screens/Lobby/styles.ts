import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  textLobby: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  buttonStart: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    backgroundColor: THEME.colors.gray[700],
    justifyContent: 'center',
    marginTop: 40,
  },
  textStart: {
    textAlign: 'center',
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xl,
    fontWeight: 'bold',
  },
  textLobbyContainer: {
    marginVertical: 14,
    alignItems: 'center',
  },
  lobbyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '60%',
  },
})
