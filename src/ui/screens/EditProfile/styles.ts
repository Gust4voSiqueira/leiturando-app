import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.colors.gray['900'],
  },
  editProfileFormContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    marginTop: 14,
    backgroundColor: THEME.colors.gray['700'],
  },
  inputsContainer: {
    width: '90%',
  },
  imageProfile: {
    borderRadius: 50,
    marginBottom: 15,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  updatePasswordText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.md,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 12,
    textAlign: 'center',
  },
  inputEmail: {
    borderRadius: 4,
    backgroundColor: THEME.colors.gray['900'],
    color: THEME.colors.gray['400'],
    fontSize: THEME.fontSizes.sm,
    padding: 14,
    marginBottom: 8,
    opacity: 0.5,
  },
})
