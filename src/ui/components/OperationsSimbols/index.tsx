import { Divide, Minus, Plus, X } from 'phosphor-react-native'
import { THEME } from '../../../../global/theme'
import { IOperations } from '../../../dtos/MathDTO'

interface IOperationsSimbols {
  operation: IOperations
  size: number
}

export function OperationsSimbols({ operation, size }: IOperationsSimbols) {
  const icons = {
    SUBTRACTION: <Minus size={size} color={THEME.colors.white} weight="bold" />,
    ADDITION: <Plus size={size} color={THEME.colors.white} weight="bold" />,
    MULTIPLICATION: <X size={size} color={THEME.colors.white} weight="bold" />,
    DIVISION: <Divide size={size} color={THEME.colors.white} weight="bold" />,
  }

  return icons[operation]
}