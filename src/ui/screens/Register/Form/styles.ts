import { Platform, StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../global/themes/default'

export const styles = StyleSheet.create({
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
    borderWidth: 2,
    borderColor: colors['red-600'],
    color: colors['red-600'],
  },
  textRegister: {
    color: colors.white,
    marginBottom: 10,
  },
  buttonSelectImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageProfileText: {
    color: colors.white,
    fontSize: fontsSize.xmini,
    marginTop: 5,
    fontWeight: '700',
  },
  image: {
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
  },
})
