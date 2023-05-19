import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '90%',
    top: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: colors.white,
    fontSize: fontsSize.xlarge,
    fontWeight: 'bold',
  },
})
