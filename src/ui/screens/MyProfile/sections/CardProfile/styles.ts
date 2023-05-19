import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardProfileContainer: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors['black-700'],
    width: '100%',
    borderRadius: 4,

    paddingTop: 15,
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
    fontSize: fontsSize.large,
    fontWeight: '600',
    color: colors.white,
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
    borderTopColor: colors['black-900'],
  },
  textFooterCard: {
    fontSize: 8,
    color: colors['black-400'],
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
