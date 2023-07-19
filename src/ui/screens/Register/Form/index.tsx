import {
  View,
  Pressable,
  Text,
  TextInput,
  Image,
  ImageSourcePropType,
} from 'react-native'

import { Link } from '@react-navigation/native'
import { ButtonNext } from '../../../components'

import { colors } from '../../../../../global/themes/default'

import { styles } from './styles'

import ImageProfileDefault from '../../../../../assets/profileDefault.svg'
import React, { useState } from 'react'
import { Characters as CharactersType } from '..'
import { Characters } from '../Modal/characters'

interface IImage {
  source?: ImageSourcePropType
  sourceString?: string
  type: 'character' | 'galery'
}

interface IOnRenderImage {
  image: IImage
  characterSelected: CharactersType
}

function OnRenderImage({ image, characterSelected }: IOnRenderImage) {
  if (image) {
    return (
      <Image source={{ uri: image.sourceString }} style={styles.image} alt="" />
    )
  } else if (characterSelected) {
    const image = Characters.find(
      (character) => character.name === characterSelected,
    )
    return <Image source={image.image} style={styles.image} alt="" />
  } else {
    return <ImageProfileDefault />
  }
}

export interface IInputs {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type IError = 'name' | 'email' | 'password' | 'confirmPassword'

interface IFormRegisterProps {
  onOpenModal: () => void
  image: IImage
  characterSelected: CharactersType
  onRegisterFunction: (inputs: IInputs) => void
}

export function FormRegister({
  onOpenModal,
  image,
  characterSelected,
  onRegisterFunction,
}: IFormRegisterProps) {
  const [error, setError] = useState<IError[] | string[]>([])
  const [inputs, setInputs] = useState<IInputs>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onErrorInput = (field: String) => error.some((error) => error === field)

  const validateInputs = (field: IError) => {
    const { name, email, password, confirmPassword } = inputs

    const fields = {
      name: name.length > 2 && name.length < 10,
      email: email.length > 10,
      password: password.length > 5 && password.length < 15,
      confirmPassword:
        confirmPassword.length > 5 &&
        confirmPassword.length < 15 &&
        confirmPassword === password,
    }

    return fields[field]
  }

  const onRegister = () => {
    const errors = Object.keys(inputs).filter(
      (input: IError) => !validateInputs(input),
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
          <OnRenderImage image={image} characterSelected={characterSelected} />
        </Pressable>
        <Text style={styles.imageProfileText}>Foto de perfil</Text>
      </View>
      <TextInput
        style={[styles.input, onErrorInput('name') && styles.inputError]}
        placeholder="Nome ou Apelido"
        placeholderTextColor={colors['black-300']}
        autoCapitalize="none"
        onChangeText={(newText) => setInputs({ ...inputs, name: newText })}
      />

      <TextInput
        style={[styles.input, onErrorInput('email') && styles.inputError]}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) => setInputs({ ...inputs, email: newText })}
      />

      <TextInput
        secureTextEntry={true}
        style={[styles.input, onErrorInput('password') && styles.inputError]}
        placeholder="Senha"
        autoCapitalize="none"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) => setInputs({ ...inputs, password: newText })}
      />

      <TextInput
        secureTextEntry={true}
        style={[
          styles.input,
          onErrorInput('confirmPassword') && styles.inputError,
        ]}
        placeholder="Confirmar Senha"
        autoCapitalize="none"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) =>
          setInputs({ ...inputs, confirmPassword: newText })
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
