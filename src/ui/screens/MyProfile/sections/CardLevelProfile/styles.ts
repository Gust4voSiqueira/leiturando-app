import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

interface StyleProps {
  progressActualBarProgress: number
}

export const styles = (props: StyleProps) =>
  StyleSheet.create({
    levelProfileContainer: {
      marginVertical: 13,
      width: 320,
      borderRadius: 4,

      padding: 15,
      backgroundColor: THEME.colors.gray['700'],
    },
    yourLevelText: {
      color: THEME.colors.white,
      fontSize: 17.5,
      fontWeight: '600',
    },
    barLevelProfileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    levelProfileText: {
      color: THEME.colors.white,
      marginBottom: 10,
      marginTop: 15,
    },
    levelTotal: {
      backgroundColor: THEME.colors.white,
      height: 5,
      width: 280,
      borderRadius: 8,
    },
    progressActual: {
      height: 5,
      width: `${props.progressActualBarProgress}%`,
      borderRadius: 8,
      backgroundColor: THEME.colors.green['600'],
    },
  })
