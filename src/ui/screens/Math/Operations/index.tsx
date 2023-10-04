import React, { useState } from 'react'
import { Text, View, Pressable } from 'react-native'

import { styles } from './styles'
import { ButtonNext, Header } from '../../../components'
import { Divide, Minus, Plus, X } from 'phosphor-react-native'
import { colors } from '../../../../../global/themes/default'
import { IOperations } from '../../../../hooks/useMath'
import { useNavigation } from '@react-navigation/native'

export function Operations() {
  const navigation = useNavigation()
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
      navigation.navigate('math', { operations: selectedOperations })
    }
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
          <Pressable
            style={[
              styles.buttonSelect,
              selectedOperations.some((selected) => selected === 'ADDITION') &&
                styles.buttonSelected,
              error && styles.errorSelected,
            ]}
            onPress={() => onSelectOperation('ADDITION')}
          >
            <Plus size={40} color={colors.white} weight="bold" />
          </Pressable>
          <Pressable
            style={[
              styles.buttonSelect,
              selectedOperations.some(
                (selected) => selected === 'SUBTRACTION',
              ) && styles.buttonSelected,
              error && styles.errorSelected,
            ]}
            onPress={() => onSelectOperation('SUBTRACTION')}
          >
            <Minus size={40} color={colors.white} weight="bold" />
          </Pressable>
          <Pressable
            style={[
              styles.buttonSelect,
              selectedOperations.some(
                (selected) => selected === 'MULTIPLICATION',
              ) && styles.buttonSelected,
              error && styles.errorSelected,
            ]}
            onPress={() => onSelectOperation('MULTIPLICATION')}
          >
            <X size={40} color={colors.white} weight="bold" />
          </Pressable>
          <Pressable
            style={[
              styles.buttonSelect,
              selectedOperations.some((selected) => selected === 'DIVISION') &&
                styles.buttonSelected,
              error && styles.errorSelected,
            ]}
            onPress={() => onSelectOperation('DIVISION')}
          >
            <Divide size={40} color={colors.white} weight="bold" />
          </Pressable>
        </View>

        <ButtonNext text="Começar" onClickFunction={onStartMathMode} />
      </View>
    </View>
  )
}
