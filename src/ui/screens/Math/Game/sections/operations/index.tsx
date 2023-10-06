import { Text, View } from 'react-native'
import { styles } from './styles'
import { IOperations } from '../../../../../../hooks/useMath'
import { Divide, Minus, Plus, X } from 'phosphor-react-native'
import { Box, Input, theme } from 'native-base'

const operationsSimbols = {
  SUBTRACTION: <Minus size={60} color={theme.colors.white} weight="bold" />,
  ADDITION: <Plus size={60} color={theme.colors.white} weight="bold" />,
  MULTIPLICATION: <X size={60} color={theme.colors.white} weight="bold" />,
  DIVISION: <Divide size={60} color={theme.colors.white} weight="bold" />,
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
    <Box bg={'gray.900'} style={styles.operationContainer}>
      <View style={styles.line1container}>
        <Text style={styles.simbol}>+</Text>
        <Text style={styles.operationText}>{number1}</Text>
      </View>
      <View style={styles.line2container}>
        <Text style={styles.operationText}>{operationsSimbols[operation]}</Text>
        <Text style={styles.operationText}>{`${number2}`}</Text>
      </View>

      <View style={styles.lineResult} />

      <Input
        bg={'gray.700'}
        w={'70%'}
        h={120}
        mt={15}
        fontSize={theme.fontSizes['7xl']}
        color={theme.colors.white}
        fontWeight={'bold'}
        textAlign={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius={5}
        borderWidth={0}
        _focus={{
          bg: 'gray.700',
        }}
        style={isError && styles.error}
        onChangeText={(newText) =>
          onChangeResponse(number1, number2, operation, newText)
        }
        keyboardType="numeric"
        value={valueInput}
      />
    </Box>
  )
}
