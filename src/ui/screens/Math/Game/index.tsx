import { Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../components'
import { useEffect, useState } from 'react'
import { IOperations, useMath } from '../../../../hooks/useMath'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../routes/types'
import { Loading } from '../../Loading'
import { ButtonsSection } from './sections/buttons'
import { OperationsContainer } from './sections/operations'

type ResumeProps = StackScreenProps<RootStackParamList, 'Math'>

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

export function MathScreen({ route, navigation }: ResumeProps) {
  const [data, setData] = useState<IOperationsResponse[]>([])
  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState<IResponses>({})
  const { getMath, finnalyMath } = useMath()
  const { operations } = route.params

  useEffect(() => {
    async function onGetMaths() {
      try {
        const response = await getMath(operations)

        setData(response)
      } catch (err) {
        console.log(err)
      }
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
    if (newIndex >= 0 && newIndex < 7) {
      setIndex(newIndex)
    }

    if (newIndex === 7) {
      try {
        const response = await finnalyMath(responses)

        navigation.navigate('Result', {
          response,
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  if (data.length === 0) return <Loading />

  return (
    <View style={styles.mathContainer}>
      <Header title="Matemática" />
      <View>
        <Text />

        <OperationsContainer
          number1={data[index].number1}
          number2={data[index].number2}
          operation={data[index].operation}
          onChangeResponse={onChangeResponse}
          valueInput={responses[`response${index}`]?.response || ''}
        />

        <ButtonsSection
          onAlterOperation={onAlterOperation}
          index={index}
          totalIndex={data.length}
        />
      </View>
    </View>
  )
}
