import { theme } from 'native-base'
import { StyleSheet } from 'react-native'

interface StyleProps {
  progressActualBarProgress: number
}

export const styles = (props: StyleProps) =>
  StyleSheet.create({
    cardContainer: {
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    requestsContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      alignItems: 'center',
    },
    requestsText: {
      color: theme.colors.white,
      fontSize: 9,
    },
    nameUser: {
      fontSize: theme.fontSizes.xl,
      fontWeight: '600',
      color: theme.colors.white,
    },
    levelContainer: {
      marginTop: 8,
    },
    levelText: {
      color: theme.colors.white,
      textAlign: 'center',
      marginBottom: 5,
    },
    levelTotal: {
      backgroundColor: theme.colors.white,
      height: 5,
      width: 180,
      borderRadius: 8,
    },
    progressActual: {
      backgroundColor: theme.colors.green[500],
      height: 5,
      width: `${props.progressActualBarProgress}%`,
      borderRadius: 8,
    },
    quantitieRequestsCircle: {
      position: 'absolute',
      right: 0,
      top: -10,
      backgroundColor: theme.colors.red[600],
      borderRadius: 50,
      width: 15,
      height: 15,

      justifyContent: 'center',
      alignItems: 'center',
    },
    quantitieRequestsText: {
      color: theme.colors.white,
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  })
