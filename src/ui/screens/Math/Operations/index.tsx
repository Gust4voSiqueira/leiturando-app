import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'
import { ButtonNext, Header } from '../../../components'
import { Divide, Minus, Plus, X } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { Box, Pressable, theme } from 'native-base'
import { IOperations } from '../../../../dtos/MathDTO'

const icons = {
  ADDITION: <Plus size={40} color={theme.colors.white} weight="bold" />,
  SUBTRACTION: <Minus size={40} color={theme.colors.white} weight="bold" />,
  MULTIPLICATION: <X size={40} color={theme.colors.white} weight="bold" />,
  DIVISION: <Divide size={40} color={theme.colors.white} weight="bold" />,
}

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
        bg={'gray.700'}
        borderColor={'gray.700'}
        style={[
          styles.buttonSelect,
          selectedOperations.some((selected) => selected === operation) &&
            styles.buttonSelected,
          error && styles.errorSelected,
        ]}
        onPress={() => onSelectOperation(operation)}
      >
        {icons[operation]}
      </Pressable>
    )
  }

  return (
    <Box bg={'gray.900'} style={styles.operationsContainer}>
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
          {Object.keys(icons).map((operation: IOperations) => {
            return RenderButtons(operation)
          })}
        </View>

        <Box w={'60%'}>
          <ButtonNext text="Começar" onPress={onStartMathMode} />
        </Box>
      </View>
    </Box>
  )
}
