import { Dimensions, StyleSheet } from 'react-native'
import { theme } from 'native-base'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  deepShadow: {
    zIndex: 10,
    position: 'absolute',
    opacity: 0.5,
    width,
    height,
    backgroundColor: theme.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    zIndex: 11,
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    backgroundColor: theme.colors.gray[900],

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textSelect: {
    color: theme.colors.white,
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
