import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  cardMatchesContainer: {
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
    fontSize: theme.fontSizes.md,
    fontWeight: '600',
    color: theme.colors.white,
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
