import { Platform, StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
    backgroundColor: colors['black-900'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileFormContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors['black-700'],
    paddingVertical: 20,
    borderRadius: 4,
    marginTop: Platform.OS === 'android' && '30%',
  },
  imageProfile: {
    borderRadius: 50,
    marginBottom: 15,
  },
  inputEditProfile: {
    width: '90%',
    height: Platform.OS === 'ios' ? 45 : 40,
    color: colors.white,
    backgroundColor: colors['black-900'],
    marginVertical: 3,
    paddingLeft: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors['black-900'],
    fontSize: fontsSize.xsmall,
  },
  inputEditProfileFocused: {
    width: '90%',
    height: Platform.OS === 'ios' ? 45 : 40,
    color: colors.white,
    backgroundColor: colors['black-900'],
    marginVertical: 3,
    paddingLeft: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors['green-500'],
    fontSize: fontsSize.xsmall,
  },
  buttonsContainer: {
    width: '90%',
    marginTop: 15,
  },
  buttonEditProfile: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: colors['green-600'],
    justifyContent: 'center',
    marginVertical: 4,
  },
  textButton: {
    color: colors.black,
    fontSize: 14.5,
    textAlign: 'center',
    fontWeight: '700',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputError: {
    borderWidth: 2,
    borderColor: colors['red-600'],
    color: colors['red-600'],
  },
})
