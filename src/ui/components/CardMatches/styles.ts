import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  cardMatchesContainer: {
    backgroundColor: colors['black-700'],
    width: 320,
    borderRadius: 13,
    marginBottom: 20,

    padding: 15,
    zIndex: -1,
  },
  headerCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleSection: {
    fontSize: fontsSize.medium,
    fontWeight: '600',
    color: colors.white,
    marginLeft: 10,
  },
  ImageContainer: {
    margin: 12,
  },
  wordsContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    width: 120,
  },
})
