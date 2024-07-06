import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from './styles'
import { ButtonNext, Header, OperationsSimbols } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import { IOperations } from '../../../../dtos/MathDTO'

export function Operations() {
  const { navigate } = useNavigation()
  const [selectedOperations, setOperationsSelected] = useState<IOperations[]>(
    [],
  )
  const [error, setError] = useState(false)

  function onSelectOperation(newOperation: IOperations) {
    const isSelected = selectedOperations.some(
      (selected) => selected === newOperation,
    )

    if (isSelected) {
      const filteredOperations = selectedOperations.filter(
        (selectedOperations) => selectedOperations !== newOperation,
      )
      setOperationsSelected(filteredOperations)
    } else {
      setError(false)
      setOperationsSelected([...selectedOperations, newOperation])
    }
  }

  async function onStartMathMode() {
    if (selectedOperations.length === 0) {
      setError(!error)
    } else {
      navigate('math', { operations: selectedOperations })
    }
  }

  function RenderButtons(operation: IOperations) {
    return (
      <Pressable
        key={operation}
        style={[
          styles.buttonSelect,
          selectedOperations.some((selected) => selected === operation) &&
            styles.buttonSelected,
          error && styles.errorSelected,
        ]}
        onPress={() => onSelectOperation(operation)}
      >
        <OperationsSimbols operation={operation} size={40} />
      </Pressable>
    )
  }

  return (
    <View style={styles.operationsContainer}>
      <Header
        title="Matemática"
        textSpeech="Selecione as operações que deseja:"
        isRedirect
      />

      <View style={styles.container}>
        <Text style={styles.instructions}>
          Selecione as operações que deseja:
        </Text>

        <View style={styles.selectionContainer}>
          {Object.values(['ADDITION', 'SUBTRACTION', 'MULTIPLICATION', 'DIVISION'])
            .map((operation: IOperations) => {
              return RenderButtons(operation)
            })}
        </View>

        <View style={styles.buttonNextContainer}>
          <ButtonNext text="Começar" onPress={onStartMathMode} />
        </View>
      </View>
    </View>
  )
}
