import Animated, { FadeInUp } from 'react-native-reanimated'

import { BarChart } from 'react-native-chart-kit'

import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { IRankingDataDTO } from '../../../dtos/RankingDataDTO'
import { ArrowClockwise } from 'phosphor-react-native'
import { styles } from './styles'
import { THEME } from '../../../../global/theme'
import { Card } from '../Card'

interface ICardRanking {
  title: string
  data: IRankingDataDTO
  updateRanking: () => void
  isLoading: boolean
}

export function CardRanking({
  data,
  title,
  updateRanking,
  isLoading,
}: ICardRanking) {
  const chartConfig = {
    backgroundGradientFrom: '#202024',
    backgroundGradientTo: '#202024',
    color: (opacity = 1) => `rgba(4, 211, 97, ${opacity})`,
    labelColor: () => `#fff`,
    strokeWidth: 2,
    decimalPlaces: 0,
    barPercentage: 0.8,
  }

  return (
    <Animated.View entering={FadeInUp.delay(500)}>
      <Card>
        <View style={styles.rankingHeader}>
          <Text style={styles.rankingTitle}>{title}</Text>

          <Pressable onPress={updateRanking}>
            <ArrowClockwise size={20} color={THEME.colors.white} />
          </Pressable>
        </View>

        {!data || isLoading ? (
          <View style={styles.rankingLoaderContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <BarChart
            style={{ marginVertical: 8, paddingRight: 40 }}
            showValuesOnTopOfBars={true}
            data={data}
            width={290}
            height={168}
            yAxisLabel=""
            yAxisSuffix=""
            fromZero={true}
            chartConfig={chartConfig}
          />
        )}
      </Card>
    </Animated.View>
  )
}
