import { Box, Center, Pressable, Text, View, useToast } from 'native-base'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { BarChart } from 'react-native-chart-kit'

import { useEffect, useState } from 'react'
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
  const { getGlobalRanking } = useUser()

  const toast = useToast()

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
      const response = await getGlobalRanking()

      setData(response)
    } catch (error) {
      toast.show({
        title: 'Falha ao buscar ranking global',
        placement: 'top',
        bgColor: 'red.500',
      })
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
            Hanking Global
          </Text>

          <Pressable onPress={getData}>
            <ArrowClockwise size={20} color={THEME.colors.white} />
          </Pressable>
        </View>

        {!data ? (
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
