import { StyleSheet } from 'react-native'
import { THEME } from '../../../../../../global/theme'

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
      color: THEME.colors.white,
      fontSize: 9,
      textAlign: 'center',
    },
    logoutButton: {
      position: 'absolute',
      top: 0,
      left: 0,
      alignItems: 'center',
    },
    nameUser: {
      fontSize: THEME.fontSizes.xl,
      fontWeight: '600',
      color: THEME.colors.white,
    },
    imageProfile: {
      borderRadius: 50,
    },
    levelContainer: {
      marginTop: 5,
    },
    levelText: {
      color: THEME.colors.white,
      textAlign: 'center',
      marginBottom: 5,
    },
    levelTotal: {
      backgroundColor: THEME.colors.white,
      height: 5,
      width: 180,
      borderRadius: 8,
    },
    progressActual: {
      height: 5,
      width: `${props.progressActualBarProgress}%`,
      borderRadius: 8,
      backgroundColor: THEME.colors.green['600'],
    },
    quantitieRequestsCircle: {
      position: 'absolute',
      right: 0,
      top: -10,
      backgroundColor: THEME.colors.red[600],
      borderRadius: 50,
      width: 15,
      height: 15,

      justifyContent: 'center',
      alignItems: 'center',
    },
    quantitieRequestsText: {
      color: THEME.colors.white,
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonProfile: {
      borderRadius: 6,
      marginTop: 15,
      paddingVertical: 7,
      paddingHorizontal: 40,
      backgroundColor: THEME.colors.green['600'],
    },
    textButtonProfile: {
      fontWeight: '600',
    },
  })
