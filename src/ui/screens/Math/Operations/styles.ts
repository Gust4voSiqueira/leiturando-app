import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  operationsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: '40%',
  },
  instructions: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
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
  },
  buttonSelected: {
    borderWidth: 1,
    borderColor: theme.colors.green[600],
  },
  errorSelected: {
    borderColor: theme.colors.red[600],
  },
})
