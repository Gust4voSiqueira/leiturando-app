import { View, Pressable, Text, TextInput } from 'react-native'

import { Link } from '@react-navigation/native'
import { ButtonNext } from '../../../components'

import { colors } from '../../../../../global/themes/default'

import { styles } from './styles'

import ImageProfileDefault from '../../../../../assets/profileDefault.svg'
import React, { useState } from 'react'
import { Characters as CharactersType } from '..'
import { FieldsRegisterNewUser, onErrorInput, validateInputs } from './validate'
import { handleDateChange } from '../../../../utils/handleDateChange'
import { charactersImages } from '../../../../utils/charactersImages'

interface IOnRenderImage {
  characterSelected: CharactersType
}

function OnRenderImage({ characterSelected }: IOnRenderImage) {
  if (characterSelected) {
    const image = charactersImages(65, 65).find(
      (character) => character.name === characterSelected,
    )
    return image.image
  } else {
    return <ImageProfileDefault />
  }
}

export interface IInputs {
  name: string
  email: string
  password: string
  confirmPassword: string
  dateOfBirth: string
}

interface IFormRegisterProps {
  onOpenModal: () => void
  characterSelected: CharactersType
  onRegisterFunction: (inputs: IInputs) => void
}

export function FormRegister({
  onOpenModal,
  characterSelected,
  onRegisterFunction,
}: IFormRegisterProps) {
  const [error, setError] = useState([])
  const [inputs, setInputs] = useState<IInputs>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  })

  const onRegister = () => {
    const errors = Object.keys(inputs).filter(
      (input: FieldsRegisterNewUser) => !validateInputs(input, inputs),
    )

    setError([...errors])

    if (errors.length === 0) {
      onRegisterFunction(inputs)
    }
  }
  return (
    <View style={styles.formLogin}>
      <View style={styles.buttonSelectImage}>
        <Pressable onPress={onOpenModal}>
          <OnRenderImage characterSelected={characterSelected} />
        </Pressable>
        <Text style={styles.imageProfileText}>Foto de perfil</Text>
      </View>
      <TextInput
        style={[styles.input, onErrorInput('name', error) && styles.inputError]}
        placeholder="Nome ou Apelido"
        placeholderTextColor={colors['black-300']}
        autoCapitalize="none"
        onChangeText={(newText) => setInputs({ ...inputs, name: newText })}
      />

      <TextInput
        style={[
          styles.input,
          onErrorInput('email', error) && styles.inputError,
        ]}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) => setInputs({ ...inputs, email: newText })}
      />

      <TextInput
        secureTextEntry={true}
        style={[
          styles.input,
          onErrorInput('password', error) && styles.inputError,
        ]}
        placeholder="Senha"
        autoCapitalize="none"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) => setInputs({ ...inputs, password: newText })}
      />

      <TextInput
        secureTextEntry={true}
        style={[
          styles.input,
          onErrorInput('confirmPassword', error) && styles.inputError,
        ]}
        placeholder="Confirmar Senha"
        autoCapitalize="none"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) =>
          setInputs({ ...inputs, confirmPassword: newText })
        }
      />
      <TextInput
        style={[
          styles.input,
          onErrorInput('dateOfBirth', error) && styles.inputError,
        ]}
        placeholder="Data de nascimento"
        autoCapitalize="none"
        value={inputs.dateOfBirth}
        maxLength={10}
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) =>
          setInputs({
            ...inputs,
            dateOfBirth: handleDateChange(newText),
          })
        }
      />

      <Text style={styles.textRegister}>
        Já possui cadastro?
        <Link to="/Login"> Entrar</Link>
      </Text>
      <ButtonNext text="Cadastre-se" onClickFunction={onRegister} />
    </View>
  )
}
