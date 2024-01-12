import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'
import { Box, Center, Pressable, Text, View } from 'native-base'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { BarChart } from 'react-native-chart-kit'

import { useUser } from '../../../../../hooks/useUser'

import { ActivityIndicator } from 'react-native'
import { IRankingDataDTO } from '../../../../../dtos/RankingDataDTO'
import { ArrowClockwise } from 'phosphor-react-native'
import { THEME } from '../../../../../../global/theme'

interface IGlobalRanking {
  isReloadRanking: boolean
}

export function GlobalRanking({ isReloadRanking }: IGlobalRanking) {
  const [data, setData] = useState<IRankingDataDTO>()
  const [isLoading, setIsLoading] = useState(true)

  const { getGlobalRanking } = useUser()

  const chartConfig = {
    backgroundGradientFrom: '#202024',
    backgroundGradientTo: '#202024',
    color: (opacity = 1) => `rgba(4, 211, 97, ${opacity})`,
    labelColor: () => `#fff`,
    strokeWidth: 2,
    decimalPlaces: 0,
    barPercentage: 0.8,
  }

  async function getData() {
    try {
      setIsLoading(true)
      const response = await getGlobalRanking()

      setData(response)
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Falha',
        text2: 'Falha ao buscar ranking global',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isReloadRanking) {
      getData()
    }
  }, [isReloadRanking])

  useEffect(() => {
    getData()
  }, [])

  return (
    <Animated.View entering={FadeInUp.delay(500)}>
      <Box
        w={320}
        borderRadius={13}
        marginBottom={5}
        padding={15}
        zIndex={-1}
        bg={'gray.700'}
      >
        <View flexDir={'row'} justifyContent={'space-between'} paddingX={2}>
          <Text fontSize="md" fontWeight="600" color="white">
            Ranking Global
          </Text>

          <Pressable onPress={getData}>
            <ArrowClockwise size={20} color={THEME.colors.white} />
          </Pressable>
        </View>

        {!data || isLoading ? (
          <Center w={290} h={168}>
            <ActivityIndicator />
          </Center>
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
      </Box>
    </Animated.View>
  )
}
