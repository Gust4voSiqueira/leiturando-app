import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  filtersContainer: {
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  inputSearchContainer: {
    position: 'relative',
    width: '100%',
  },
  iconSearch: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  inputFilter: {
    backgroundColor: theme.colors.gray[800],
    color: theme.colors.gray[300],
    fontWeight: 'bold',
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: theme.fontSizes.xs,
  },
  cardsFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardFilter: {
    backgroundColor: theme.colors.gray[800],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filterSelected: {
    borderWidth: 1,
    borderColor: theme.colors.green[500],
    backgroundColor: theme.colors.gray[900],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardFilterText: {
    color: theme.colors.white,
  },
})
