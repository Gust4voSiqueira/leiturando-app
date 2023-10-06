import { Platform, StyleSheet } from 'react-native'
import { theme } from 'native-base'

export const styles = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileFormContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    marginTop: Platform.OS === 'android' && '30%',
  },
  imageProfile: {
    borderRadius: 50,
    marginBottom: 15,
  },
  buttonsContainer: {
    width: '90%',
    marginTop: 5,
  },
  buttonEditProfile: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.green[500],
    justifyContent: 'center',
    marginBottom: 8,
  },
  textButton: {
    color: theme.colors.black,
    fontSize: 14.5,
    textAlign: 'center',
    fontWeight: '700',
  },
})
