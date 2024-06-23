import { theme } from 'native-base'
import { Divide, Minus, Plus, X } from 'phosphor-react-native'

export const operationsSimbols = {
    SUBTRACTION: <Minus size={60} color={theme.colors.white} weight="bold" />,
    ADDITION: <Plus size={60} color={theme.colors.white} weight="bold" />,
    MULTIPLICATION: <X size={60} color={theme.colors.white} weight="bold" />,
    DIVISION: <Divide size={60} color={theme.colors.white} weight="bold" />,
  }