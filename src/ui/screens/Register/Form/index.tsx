import { View, Pressable, Text, TextInput, Image } from 'react-native'

import { Link } from '@react-navigation/native'
import { ButtonNext } from '../../../components'

import { colors } from '../../../../../global/themes/default'

import { styles } from './styles'

import ImageProfileDefault from '../../../../../assets/profileDefault.svg'
import { IImage } from '..'
import React, { useState } from 'react'

interface IOnRenderImage {
  image: IImage
}

function OnRenderImage({ image }: IOnRenderImage) {
  const { type, source, sourceString } = image

  return type === 'character' ? (
    <Image source={source} style={styles.image} alt="" />
  ) : (
    <Image source={{ uri: sourceString }} style={styles.image} alt="" />
  )
}

export interface IInputs {
  name: String
  email: String
  password: String
  confirmPassword: String
}

type IError = 'name' | 'email' | 'password' | 'confirmPassword'

interface IFormRegisterProps {
  onOpenModal: () => void
  image: IImage
  onRegisterFunction: (inputs: IInputs) => void
}

export function FormRegister({
  onOpenModal,
  image,
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
          {image ? <OnRenderImage image={image} /> : <ImageProfileDefault />}
        </Pressable>
        <Text style={styles.imageProfileText}>Foto de perfil</Text>
      </View>
      <TextInput
        style={[styles.input, onErrorInput('name') && styles.inputError]}
        placeholder="Nome ou Apelido"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) => setInputs({ ...inputs, name: newText })}
      />

      <TextInput
        style={[styles.input, onErrorInput('email') && styles.inputError]}
        placeholder="Email"
        placeholderTextColor={colors['black-300']}
        onChangeText={(newText) => setInputs({ ...inputs, email: newText })}
      />

      <TextInput
        secureTextEntry={true}
        style={[styles.input, onErrorInput('password') && styles.inputError]}
        placeholder="Senha"
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
