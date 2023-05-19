/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'
import { profileInfo } from '../../../database/profileData'
import { colors } from '../../../../global/themes/default'
import { useState } from 'react'

export function EditProfile() {
  const [inputFocused, setInputFocused] = useState<String>()

  function onAlterFocusInput(newFocus: string) {
    setInputFocused(newFocus)
    console.log(newFocus)
  }

  return (
    <View style={styles.editProfileContainer}>
      <Header title="Editar Perfil" isRedirect />

      <View style={styles.editProfileFormContainer}>
        <Image
          style={styles.imageProfile}
          source={{
            uri: profileInfo.user.image,
          }}
        />
        <TextInput
          style={
            inputFocused !== 'Nome'
              ? styles.inputEditProfile
              : styles.inputEditProfileFocused
          }
          placeholder="Nome"
          onFocus={() => onAlterFocusInput('Nome')}
          placeholderTextColor={colors['black-300']}
        />
        <TextInput
          style={
            inputFocused !== 'Apelido'
              ? styles.inputEditProfile
              : styles.inputEditProfileFocused
          }
          placeholder="Apelido"
          onFocus={() => onAlterFocusInput('Apelido')}
          placeholderTextColor={colors['black-300']}
        />
        <TextInput
          style={
            inputFocused !== 'Email'
              ? styles.inputEditProfile
              : styles.inputEditProfileFocused
          }
          placeholder="Email"
          onFocus={() => onAlterFocusInput('Email')}
          placeholderTextColor={colors['black-300']}
        />
        <TextInput
          style={
            inputFocused !== 'Nascimento'
              ? styles.inputEditProfile
              : styles.inputEditProfileFocused
          }
          placeholder="Data de Nascimento"
          onFocus={() => onAlterFocusInput('Nascimento')}
          placeholderTextColor={colors['black-300']}
        />

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.buttonEditProfile}>
            <Text style={styles.textButton}>Alterar Senha</Text>
          </Pressable>
          <Pressable style={styles.buttonEditProfile}>
            <Text style={styles.textButton}>Salvar Informações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
