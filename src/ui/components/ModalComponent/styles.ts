import { StyleSheet } from 'react-native'
import { THEME } from '../../../../global/theme'

export const styles = StyleSheet.create({
    modalContainer: {
        width: 10,
      },
      pressableCloseModal: {
          opacity: 0.5,
          width: '100%',
          height: '100%',
          backgroundColor: THEME.colors.black,
          justifyContent: 'center',
          alignItems: 'center',
      },
})
