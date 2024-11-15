import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  headerCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleSection: {
    fontSize: THEME.fontSizes.md,
    fontWeight: '600',
    color: THEME.colors.white,
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
