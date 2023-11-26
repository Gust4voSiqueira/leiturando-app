import { StyleSheet } from 'react-native'

import { theme } from 'native-base'

export const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: theme.colors.gray[900],
    marginTop: 50,
  },
  formLogin: {
    width: '90%',
  },
  textRegister: {
    color: theme.colors.white,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: theme.colors.green[600],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerDisable: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: theme.colors.green[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: theme.colors.black,
    fontWeight: '700',
    fontSize: theme.fontSizes.md,
    textAlign: 'center',
  },
  load: {
    width: 5,
    alignItems: 'center',
  },
})
