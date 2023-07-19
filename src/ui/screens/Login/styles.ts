import { Platform, StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: colors['black-900'],
    marginTop: 50,
  },
  formLogin: {
    width: '90%',
  },
  input: {
    width: '100%',
    height: Platform.OS === 'ios' ? 45 : 40,
    color: colors['black-900'],
    backgroundColor: colors.white,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors['black-900'],
    fontSize: fontsSize.xmini,
  },
  inputError: {
    width: '100%',
    height: Platform.OS === 'ios' ? 45 : 40,
    color: colors['black-900'],
    backgroundColor: colors.white,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 4,
    fontSize: fontsSize.xmini,
    borderWidth: 2,
    borderColor: colors['red-600'],
  },
  textRegister: {
    color: colors.white,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: colors['green-600'],
    justifyContent: 'center',
  },
  buttonContainerDisable: {
    width: '100%',
    height: 45,
    borderRadius: 7,
    backgroundColor: colors['green-700'],
    justifyContent: 'center',
  },
  textButton: {
    color: colors.black,
    fontWeight: '700',
    fontSize: fontsSize.medium,
    textAlign: 'center',
  },
})
