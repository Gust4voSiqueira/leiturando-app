import { Dimensions, StyleSheet } from 'react-native'

const { get } = Dimensions

const { width, height } = get('screen')
const widthModalContainer = 0.8 * width
const heightModalContainer = 0.5 * height

export const styles = StyleSheet.create({
    modalSelectImageContainer: {
        position: 'absolute',
        height: heightModalContainer,
        width: widthModalContainer,
        right: (width - (widthModalContainer)) / 2,
        top: (height - (heightModalContainer)) / 2,
      },
})
