import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
  rankingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  rankingTitle: {
    fontSize: THEME.fontSizes.md,
    fontWeight: '600',
    color: THEME.colors.white,
  },
  rankingLoaderContainer: {
    width: 290,
    height: 184,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
