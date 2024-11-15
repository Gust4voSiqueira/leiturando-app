import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

import { useUser } from '../../../../../hooks/useUser'

import { IRankingDataDTO } from '../../../../../dtos/RankingDataDTO'
import { CardRanking } from '../../../../components/CardRanking'

interface IGlobalRanking {
  isReloadRanking: boolean
}

export function GlobalRanking({ isReloadRanking }: IGlobalRanking) {
  const [data, setData] = useState<IRankingDataDTO>()
  const [isLoading, setIsLoading] = useState(true)

  const { getGlobalRanking } = useUser()

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
    <CardRanking
      title="Ranking Global"
      isLoading={isLoading}
      data={data}
      updateRanking={getData}
    />
  )
}
