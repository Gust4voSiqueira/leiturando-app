import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

export const styles = StyleSheet.create({
  cardProfileContainer: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: 320,
    borderRadius: 4,

    paddingTop: 15,
    backgroundColor: THEME.colors.gray['700'],
  },
  iconPencil: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconBack: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  nameUser: {
    fontSize: THEME.fontSizes.xl,
    fontWeight: '600',
    color: THEME.colors.white,
  },
  imageProfile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 5,
  },
  footerCardContainer: {
    width: 320,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderTopWidth: 1.5,
    borderTopColor: THEME.colors.gray[900],
  },
  textFooterCard: {
    fontSize: 8,
    color: THEME.colors.gray[400],
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
