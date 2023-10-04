import { StyleSheet } from 'react-native'
import { colors } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  wordsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors['black-900'],
  },
  wordsAndAudioContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 40,
  },
})
