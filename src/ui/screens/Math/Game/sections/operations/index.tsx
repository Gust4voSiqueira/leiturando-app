import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'

import { IOperations } from '../../../../../../dtos/MathDTO'
import { OperationsSimbols } from '../../../../../components'
import { THEME } from '../../../../../../../global/theme'

interface IOperationsSection {
  number1: number
  number2: number
  operation: IOperations
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
  valueInput,
  onChangeResponse,
  isError,
}: IOperationsSection) {

  if(!operation) {
    return <Text>Carregando...</Text>
  }

  return (
    <View style={styles.operationContainer}>
      <View style={styles.line1container}>
        <Text style={styles.operationText}>{number1}</Text>
      </View>

      <View style={styles.line2container}>
        <Text style={styles.operationText}>
          <OperationsSimbols operation={operation} size={THEME.fontSizes['7xl']} />
        </Text>
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
