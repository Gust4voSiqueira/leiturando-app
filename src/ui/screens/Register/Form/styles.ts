import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../global/theme'

export const styles = StyleSheet.create({
  formLogin: {
    width: '90%',
  },
  textRegister: {
    color: THEME.colors.white,
    marginBottom: 10,
  },
  buttonSelectImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageProfileText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xs,
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
