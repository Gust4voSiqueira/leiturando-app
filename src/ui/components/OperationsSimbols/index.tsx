
import { THEME } from '../../../../global/theme'
import { IOperations } from '../../../dtos/MathDTO'

import { Text } from 'react-native'

interface IOperationsSimbols {
  operation: IOperations
  size: number
}

export function OperationsSimbols({ operation, size }: IOperationsSimbols) {
  const icons = {
    SUBTRACTION: <Text  style={{ fontWeight: 'normal', fontSize: size, color: THEME.colors.white }}>{"-".toUpperCase()}</Text>,
    ADDITION: <Text style={{ fontWeight: 'normal', fontSize: size, color: THEME.colors.white }}>+</Text>,
    MULTIPLICATION: <Text  style={{ fontWeight: 'normal', fontSize: size, color: THEME.colors.white }}>x</Text>,
    DIVISION: <Text  style={{ fontWeight: 'normal', fontSize: size, color: THEME.colors.white }}>÷</Text>,
  }

  return icons[operation]
}