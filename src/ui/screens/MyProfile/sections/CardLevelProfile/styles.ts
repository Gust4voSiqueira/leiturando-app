import { StyleSheet } from 'react-native'
import { colors } from '../../../../../../global/themes/default'

interface StyleProps {
  progressActualBarProgress: number
}

export const styles = (props: StyleProps) =>
  StyleSheet.create({
    levelProfileContainer: {
      marginVertical: 13,
      backgroundColor: colors['black-700'],
      width: 320,
      borderRadius: 4,

      padding: 15,
    },
    yourLevelText: {
      color: colors.white,
      fontSize: 17.5,
      fontWeight: '600',
    },
    barLevelProfileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    levelProfileText: {
      color: colors.white,
      marginBottom: 10,
      marginTop: 15,
    },
    levelTotal: {
      backgroundColor: colors.white,
      height: 5,
      width: 280,
      borderRadius: 8,
    },
    progressActual: {
      backgroundColor: colors['green-500'],
      height: 5,
      width: `${props.progressActualBarProgress}%`,
      borderRadius: 8,
    },
  })
