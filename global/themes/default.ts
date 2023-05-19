import { Dimensions, Platform, PixelRatio } from 'react-native'

export const colors = {
  white: '#FFF',
  black: '#000',
  'white-300': '#E1E1E6',

  'green-500': '#32E206',
  'green-600': '#04D361',

  'red-600': '#C11111',

  'black-300': '#A8A8B3',
  'black-400': '#87868B',
  'black-500': '#414146',
  'black-700': '#202024',
  'black-900': '#121214',
} as const

function normalize(size: number) {
  const { width: SCREEN_WIDTH } = Dimensions.get('window')

  const scale = SCREEN_WIDTH / 320

  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const fontsSize = {
  mini: normalize(8),
  xmini: normalize(12),
  small: normalize(9),
  xsmall: normalize(14.5),
  medium: normalize(17),
  xmedium: normalize(19),
  large: normalize(20),
  xlarge: normalize(25),
}
