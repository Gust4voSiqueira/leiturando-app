import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

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
    backgroundColor: THEME.colors.gray[800],
    color: THEME.colors.gray[300],
    fontWeight: 'bold',
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: THEME.fontSizes.xs,
  },
  cardsFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardFilter: {
    backgroundColor: THEME.colors.gray[800],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filterSelected: {
    borderWidth: 1,
    borderColor: THEME.colors.green[500],
    backgroundColor: THEME.colors.gray[900],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardFilterText: {
    color: THEME.colors.white,
  },
})
