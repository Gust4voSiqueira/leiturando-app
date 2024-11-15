import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: THEME.colors.gray['700'],

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textSelect: {
    color: THEME.colors.white,
    marginTop: 5,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  imageSelect: {
    alignItems: 'center',
    width: 60,
    height: 60,
    marginVertical: 15,
  },
  cancelSelection: {
    backgroundColor: THEME.colors.green['500'],
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  cancelSelectionContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
})
