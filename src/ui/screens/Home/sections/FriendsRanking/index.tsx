import { useEffect, useState } from 'react'
import Toast from 'react-native-toast-message'

import { useUser } from '../../../../../hooks/useUser'
import { IRankingDataDTO } from '../../../../../dtos/RankingDataDTO'
import { CardRanking } from '../../../../components/CardRanking'

interface IFriendsRanking {
  isReloadRanking: boolean
}

export function FriendsRanking({ isReloadRanking }: IFriendsRanking) {
  const [data, setData] = useState<IRankingDataDTO>()
  const [isLoading, setIsLoading] = useState(true)

  const { getFriendsRanking } = useUser()

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
    <CardRanking
      title="Meu Ranking"
      isLoading={isLoading}
      data={data}
      updateRanking={getData}
    />
  )
}
