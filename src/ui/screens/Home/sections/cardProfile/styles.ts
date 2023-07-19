import { StyleSheet } from 'react-native'
import { colors, fontsSize } from '../../../../../../global/themes/default'

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
      color: colors.white,
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
      fontSize: fontsSize.large,
      fontWeight: '600',
      color: colors.white,
    },
    imageProfile: {
      width: 65,
      height: 65,
      borderRadius: 50,
      marginBottom: 5,
    },
    levelContainer: {
      marginTop: 5,
    },
    levelText: {
      color: colors.white,
      textAlign: 'center',
      marginBottom: 5,
    },
    levelTotal: {
      backgroundColor: colors.white,
      height: 5,
      width: 180,
      borderRadius: 8,
    },
    progressActual: {
      backgroundColor: colors['green-600'],
      height: 5,
      width: `${props.progressActualBarProgress}%`,
      borderRadius: 8,
    },
    quantitieRequestsCircle: {
      position: 'absolute',
      right: 0,
      top: -10,
      backgroundColor: colors['red-600'],
      borderRadius: 50,
      width: 15,
      height: 15,

      justifyContent: 'center',
      alignItems: 'center',
    },
    quantitieRequestsText: {
      color: colors.white,
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonProfile: {
      borderRadius: 6,
      marginTop: 15,
      paddingVertical: 7,
      paddingHorizontal: 40,
      backgroundColor: colors['green-600'],
    },
    textButtonProfile: {
      fontWeight: '600',
    },
  })
