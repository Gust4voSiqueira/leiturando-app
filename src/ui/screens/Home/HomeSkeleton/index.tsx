import { View, useWindowDimensions } from 'react-native'
import { globalStyles } from '../../../../../global/global'

import { THEME } from '../../../../../global/theme'

import ContentLoader, { Rect } from 'react-content-loader/native'
import { calculateHalfScreen } from '../../../../utils/calculateHalfScreenSkeleton'

export function HomeSkeleton() {
  const { height, width } = useWindowDimensions()

  return (
    <View style={globalStyles.container}>
      <ContentLoader
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor={THEME.colors.gray['700']}
        foregroundColor={THEME.colors.gray['500']}
      >
        <Rect
          x={calculateHalfScreen(320)}
          y="66"
          ry="10"
          width="320"
          height="200"
        />
        <Rect
          x={calculateHalfScreen(320)}
          y="284"
          ry="10"
          width="320"
          height="200"
        />
        <Rect
          x={calculateHalfScreen(320)}
          y="502"
          ry="10"
          width="320"
          height="200"
        />
        <Rect
          x={calculateHalfScreen(320)}
          y="720"
          ry="10"
          width="320"
          height="200"
        />
      </ContentLoader>
    </View>
  )
}
