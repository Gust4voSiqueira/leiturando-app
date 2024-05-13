import { theme } from 'native-base'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  formLogin: {
    width: '90%',
  },
  textRegister: {
    color: theme.colors.white,
    marginBottom: 10,
  },
  buttonSelectImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageProfileText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xs,
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
