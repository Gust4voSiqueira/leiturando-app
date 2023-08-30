import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../global/themes/default'

export const styles = StyleSheet.create({
  operationsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors['black-900'],
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '40%',
  },
  instructions: {
    color: colors.white,
    fontSize: fontsSize.large,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: 20,
  },
  buttonSelect: {
    backgroundColor: colors['black-700'],
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors['black-700'],
  },
  buttonSelected: {
    borderColor: colors['green-600'],
  },
  errorSelected: {
    borderColor: colors['red-600'],
  },
})
