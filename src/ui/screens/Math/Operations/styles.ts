import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../global/theme'

export const styles = StyleSheet.create({
  operationsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.colors.gray['900'],
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '40%',
  },
  instructions: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  buttonSelect: {
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: THEME.colors.gray['700'],
    borderColor: THEME.colors.gray['700'],
  },
  buttonSelected: {
    borderWidth: 1,
    borderColor: THEME.colors.green['600'],
  },
  errorSelected: {
    borderColor: THEME.colors.red['600'],
  },
  buttonNextContainer: {
    width: '60%',
  },
})
