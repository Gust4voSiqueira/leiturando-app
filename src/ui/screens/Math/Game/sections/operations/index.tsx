import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

import { IOperations } from '../../../../../../dtos/MathDTO'

interface IOperationsSection {
  number1: number
  number2: number
  operation: IOperations
  operationSimbol: JSX.Element
  onChangeResponse: (
    number1: number,
    number2: number,
    operation: IOperations,
    response: string,
  ) => void
  valueInput: string
  isError: boolean
}

export function OperationsContainer({
  number1,
  number2,
  operation,
  operationSimbol,
  valueInput,
  onChangeResponse,
  isError,
}: IOperationsSection) {
  return (
    <View style={styles.operationContainer}>
      <View style={styles.line1container}>
        <Text style={styles.simbol}>+</Text>
        <Text style={styles.operationText}>{number1}</Text>
      </View>
      <View style={styles.line2container}>
        <Text style={styles.operationText}>{operationSimbol}</Text>
        <Text style={styles.operationText}>{`${number2}`}</Text>
      </View>

      <View style={styles.lineResult} />

      <TextInput
        style={[styles.inputResponse, isError && styles.error]}
        onChangeText={(newText) =>
          onChangeResponse(number1, number2, operation, newText)
        }
        keyboardType="numeric"
        value={valueInput}
      />
    </View>
  )
}
