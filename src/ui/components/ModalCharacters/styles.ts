import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../../global/themes/default'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  deepShadow: {
    zIndex: 10,
    position: 'absolute',
    opacity: 0.5,
    width,
    height,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    zIndex: 11,
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    backgroundColor: colors['black-900'],

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textSelect: {
    color: colors.white,
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
    backgroundColor: colors['green-600'],
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
