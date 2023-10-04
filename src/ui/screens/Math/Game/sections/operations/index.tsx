import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { IOperations } from '../../../../../../hooks/useMath'
import { Divide, Minus, Plus, X } from 'phosphor-react-native'
import { colors } from '../../../../../../../global/themes/default'

const operationsSimbols = {
  SUBTRACTION: <Minus size={60} color={colors.white} weight="bold" />,
  ADDITION: <Plus size={60} color={colors.white} weight="bold" />,
  MULTIPLICATION: <X size={60} color={colors.white} weight="bold" />,
  DIVISION: <Divide size={60} color={colors.white} weight="bold" />,
}

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
  return (
    <View style={styles.operationContainer}>
      <View style={styles.line1container}>
        <Text style={styles.simbol}>+</Text>
        <Text style={styles.operationText}>{number1}</Text>
      </View>
      <View style={styles.line2container}>
        <Text style={styles.operationText}>{operationsSimbols[operation]}</Text>
        <Text style={styles.operationText}>{`${number2}`}</Text>
      </View>

      <View style={styles.lineResult} />

      <TextInput
        style={[styles.resultOperation, isError && styles.error]}
        onChangeText={(newText) =>
          onChangeResponse(number1, number2, operation, newText)
        }
        keyboardType="numeric"
        value={valueInput}
      />
    </View>
  )
}
