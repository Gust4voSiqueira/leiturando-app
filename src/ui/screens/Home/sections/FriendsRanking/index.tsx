import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Box, Center, Pressable, Text, View } from 'native-base'
import Toast from 'react-native-toast-message'
import { BarChart } from 'react-native-chart-kit'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { ArrowClockwise } from 'phosphor-react-native'

import { useUser } from '../../../../../hooks/useUser'
import { IRankingDataDTO } from '../../../../../dtos/RankingDataDTO'
import { THEME } from '../../../../../../global/theme'

interface IFriendsRanking {
  isReloadRanking: boolean
}

export function FriendsRanking({ isReloadRanking }: IFriendsRanking) {
  const [data, setData] = useState<IRankingDataDTO>()
  const [isLoading, setIsLoading] = useState(true)

  const { getFriendsRanking } = useUser()

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
      const response = await getFriendsRanking()

      setData(response)
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Falha',
        text2: 'Falha ao buscar seu ranking',
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
    <Animated.View entering={FadeInUp.delay(600)}>
      <Box
        w={320}
        borderRadius={13}
        marginBottom={20}
        padding={15}
        zIndex={-1}
        bg={'gray.700'}
      >
        <View flexDir={'row'} justifyContent={'space-between'} paddingX={2}>
          <Text fontSize="md" fontWeight="600" color="white">
            Meu Ranking
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
