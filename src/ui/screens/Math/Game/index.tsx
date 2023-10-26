import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Center } from 'native-base'

import { Header } from '../../../components'
import { useMath } from '../../../../hooks/useMath'
import { Loading } from '../../Loading'
import { ButtonsSection } from './sections/buttons'
import { OperationsContainer } from './sections/operations'
import { ResultSkeleton } from '../../Result/ResultSkeleton'
import { IOperations } from '../../../../dtos/MathDTO'

interface IOperationsProps {
  operations: Array<IOperations>
}

interface IOperationsResponse {
  number1: number
  number2: number
  operation: IOperations
}

export interface IResponses {
  [key: string]: {
    number1: number
    number2: number
    operation: IOperations
    response: string
  }
}

export function MathScreen() {
  const [data, setData] = useState<IOperationsResponse[]>([])
  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState<IResponses>({})
  const [error, setError] = useState(false)
  const [isFinnally, setIsFinnally] = useState(false)
  const { getMath, finnalyMath } = useMath()

  const navigation = useNavigation()
  const routes = useRoute()
  const { operations } = routes.params as IOperationsProps

  useEffect(() => {
    async function onGetMaths() {
      try {
        const response = await getMath(operations)

        setData(response)
      } catch (err) {}
    }

    onGetMaths()
  }, [])

  function onChangeResponse(
    number1: number,
    number2: number,
    operation: IOperations,
    response: string,
  ) {
    const newResponse = {
      number1,
      number2,
      operation,
      response,
    }
    setResponses((prevResponses) => ({
      ...prevResponses,
      [`response${index}`]: newResponse,
    }))
  }

  async function onAlterOperation(newIndex: number) {
    const response = responses[`response${index}`]?.response.trim()

    if (!response) {
      setError(true)
      return
    }

    if (newIndex >= 0 && newIndex < 7) {
      setIndex(newIndex)
      setError(false)
    }

    if (newIndex === 7) {
      try {
        setIsFinnally(true)
        const response = await finnalyMath(responses)

        navigation.navigate('result', {
          response: response.results,
          score: response.score,
        })
      } catch (err) {
        setIsFinnally(false)
      }
    }
  }

  if (data.length === 0) return <Loading />

  if (isFinnally) return <ResultSkeleton />

  return (
    <Center bg={'gray.900'} flex={1}>
      <Header title="Matemática" />
      <Text />

      <OperationsContainer
        number1={data[index].number1}
        number2={data[index].number2}
        operation={data[index].operation}
        onChangeResponse={onChangeResponse}
        valueInput={responses[`response${index}`]?.response || ''}
        isError={error}
      />

      <ButtonsSection
        onAlterOperation={onAlterOperation}
        index={index}
        totalIndex={data.length}
      />
    </Center>
  )
}
