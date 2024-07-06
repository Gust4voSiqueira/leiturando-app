import { styles } from './styles'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header, OperationsSimbols } from '../../../components'
import { useMath } from '../../../../hooks/useMath'
import { Loading } from '../../Loading'
import { OperationsContainer } from './sections/operations'
import { ResultSkeleton } from '../../Result/ResultSkeleton'
import { IOperations } from '../../../../dtos/MathDTO'

import { ButtonsGame } from '../../../components/ButtonsGame'

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

  const { navigate } = useNavigation()
  const routes = useRoute()
  const { operations } = routes.params as IOperationsProps

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

  function updateOperation(newIndex: number) {
    const response = responses[`response${index}`]?.response.trim()

    if (!response) {
      setError(true)
      return
    }

    setError(false)
    setIndex(newIndex)
  }

  async function finallyGame() {
    try {
      setIsFinnally(true)
      const response = await finnalyMath(responses)

      navigate('result', {
        response: response.results,
        score: response.score,
      })
    } catch (err) {
      setIsFinnally(false)
    }
  }

  useEffect(() => {
    async function onGetMaths() {
      try {
        const response = await getMath(operations)

        setData(response)
      } catch (err) {}
    }

    onGetMaths()
  }, [])

  if (data.length === 0) return <Loading />

  if (isFinnally) return <ResultSkeleton />

  return (
    <View style={styles.gameContainer}>
      <Header title="Matemática" />

      <OperationsContainer
        number1={data[index].number1}
        number2={data[index].number2}
        operation={data[index].operation}
        operationSimbol={<OperationsSimbols operation={data[index].operation} size={60} />}
        onChangeResponse={onChangeResponse}
        valueInput={responses[`response${index}`]?.response || ''}
        isError={error}
      />

      <View style={{ width: '100%' }}>
        <ButtonsGame
          finallyGame={finallyGame}
          onAlterQuestion={updateOperation}
          index={index}
          totalIndex={data.length}
        />
      </View>
    </View>
  )
}
