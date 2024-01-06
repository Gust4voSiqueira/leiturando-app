import { StyleSheet } from 'react-native'
import { theme } from 'native-base'

export const styles = StyleSheet.create({
  textLobby: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    marginTop: 8,
  },
  buttonStart: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    backgroundColor: theme.colors.gray[700],
    justifyContent: 'center',
    marginTop: 40,
  },
  textStart: {
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
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
