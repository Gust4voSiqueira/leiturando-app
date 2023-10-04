import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

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
    backgroundColor: colors['black-700'],
    color: colors['black-300'],
    fontWeight: 'bold',
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: fontsSize.xmini,
  },
  cardsFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardFilter: {
    backgroundColor: colors['black-700'],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filterSelected: {
    backgroundColor: colors['black-500'],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cardFilterText: {
    color: colors.white,
  },
})
