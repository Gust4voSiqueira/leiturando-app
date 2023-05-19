import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../global/themes/default'

export const styles = StyleSheet.create({
  wordsContainer: {
    flex: 1,
    paddingTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors['black-900'],
  },
  wordTextContainer: {
    width: '65%',
    height: 45,
    borderRadius: 7,
    backgroundColor: colors['black-700'],
    justifyContent: 'center',
  },
  wordText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontsSize.xmedium,
    fontWeight: 'bold',
  },
  microphoneIconContainer: {
    padding: 8,
    backgroundColor: colors['black-700'],
    marginVertical: 30,
    borderRadius: 50,
  },
  buttonNextContainer: {
    marginTop: 100,
    alignItems: 'center',
    width: '100%',
  },
})
