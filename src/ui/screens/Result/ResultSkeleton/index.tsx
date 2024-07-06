import { SafeAreaView, useWindowDimensions } from 'react-native'
import { globalStyles } from '../../../../../global/global'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { THEME } from '../../../../../global/theme'
import { calculateHalfScreen } from '../../../../utils/calculateHalfScreenSkeleton'

export function ResultSkeleton() {
  const { height, width } = useWindowDimensions()
  const halfScreen = (height - 155) / 2
  const yCardProfileSkeleton = halfScreen - 40
  const yScoreSkeleton = yCardProfileSkeleton + 180
  const yNextButtonSkeleton = yScoreSkeleton + 58

  const widthButtonSkeleton = (80 / 100) * width

  return (
    <SafeAreaView style={globalStyles.container}>
      <ContentLoader
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor={THEME.colors.gray['700']}
        foregroundColor={THEME.colors.gray['500']}
      >
        <Rect
          x={calculateHalfScreen(320)}
          y={yCardProfileSkeleton}
          ry="10"
          width="320"
          height="155"
        />
        <Rect
          x={calculateHalfScreen(180)}
          y={yScoreSkeleton}
          ry="10"
          width="180"
          height="40"
        />
        <Rect
          x={calculateHalfScreen(widthButtonSkeleton)}
          y={yNextButtonSkeleton}
          ry="10"
          width={widthButtonSkeleton}
          height="48"
        />
        <Rect
          x={calculateHalfScreen(widthButtonSkeleton)}
          y={yNextButtonSkeleton + 64}
          ry="10"
          width={widthButtonSkeleton}
          height="48"
        />
      </ContentLoader>
    </SafeAreaView>
  )
}
