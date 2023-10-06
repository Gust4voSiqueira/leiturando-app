import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

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
    },
    yourLevelText: {
      color: theme.colors.white,
      fontSize: 17.5,
      fontWeight: '600',
    },
    barLevelProfileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    levelProfileText: {
      color: theme.colors.white,
      marginBottom: 10,
      marginTop: 15,
    },
    levelTotal: {
      backgroundColor: theme.colors.white,
      height: 5,
      width: 280,
      borderRadius: 8,
    },
    progressActual: {
      backgroundColor: theme.colors.green[500],
      height: 5,
      width: `${props.progressActualBarProgress}%`,
      borderRadius: 8,
    },
  })
