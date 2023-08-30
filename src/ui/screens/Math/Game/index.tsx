import { Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../../components'
import { useEffect, useState } from 'react'
import { IFinnallyMath, IOperations, useMath } from '../../../../hooks/useMath'
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

export function MathScreen({ route }: ResumeProps) {
  const [data, setData] = useState<IOperationsResponse[]>([])
  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState<IFinnallyMath[]>([])
  const [response, setResponse] = useState('')
  const { getMath } = useMath()

  const { operations } = route.params

  useEffect(() => {
    async function onGetWords() {
      try {
        const response = await getMath(operations)

        setData(response)
      } catch (err) {
        console.log(err)
      }
    }

    onGetWords()
  }, [])

  function onChangeResponse(newText: string) {
    setResponse(newText)
  }

  function onAlterOperation(newIndex: number) {
    if (newIndex >= 0) {
      setResponses([...responses])
      setIndex(newIndex)
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
