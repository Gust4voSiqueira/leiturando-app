import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: THEME.colors.gray[900],
    marginTop: 50,
  },
  formLogin: {
    width: '90%',
  },
  textRegister: {
    color: THEME.colors.white,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: THEME.colors.green[600],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerDisable: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: THEME.colors.green[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: THEME.colors.black,
    fontWeight: '700',
    fontSize: THEME.fontSizes.md,
    textAlign: 'center',
  },
  load: {
    width: 5,
    alignItems: 'center',
  },
})
