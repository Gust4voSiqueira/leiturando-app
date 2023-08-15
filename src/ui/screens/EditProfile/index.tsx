/* eslint-disable jsx-a11y/alt-text */
import { Pressable, Text, TextInput, View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'
import { colors } from '../../../../global/themes/default'
import { useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { Characters } from '../Register'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useRedirect } from '../../../hooks/useRedirect'
import { TokenContext } from '../../../contexts/TokenContext'
import { FieldsEditProfile, onErrorInput, validateInputs } from './validate'
import { handleDateChange } from '../../../utils/handleDateChange'
import { charactersImages } from '../../../utils/charactersImages'

interface IFields {
  key: string
  placeholder: string
  maxLength: number
}

const fields = [
  { key: 'name', placeholder: 'Nome', maxLength: 10 },
  { key: 'email', placeholder: 'Email', maxLength: 20 },
]

export function EditProfile() {
  const [errors, setError] = useState([])
  const [inputs, setInputs] = useState({
    characterName: '',
    name: '',
    email: '',
    dateOfBirth: '',
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { userData, removeUserData } = useContext(UserContext)
  const { removeToken } = useContext(TokenContext)
  const [inputFocused, setInputFocused] = useState<String>()
  const { editProfile } = useUserRequest()
  const redirect = useRedirect()

  const renderProfileImage = () => {
    if (inputs.characterName !== '') {
      const newImage = charactersImages(65, 65).find(
        (character) => character.name === inputs.characterName,
      ).image
      return newImage
    }

    return userData.image
  }

  function toggleModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character: Characters) {
    setInputs({
      ...inputs,
      characterName: character,
    })
    toggleModal()
  }

  const handleInputChange = (fieldKey: string, newText: string) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldKey]: newText }))
  }

  const handleFieldFocus = (fieldKey: string) => {
    setInputFocused(fieldKey)
  }

  const renderTextInput = (field: IFields) => (
    <TextInput
      style={[
        inputFocused !== field.key
          ? styles.inputEditProfile
          : styles.inputEditProfileFocused,
        onErrorInput(field.key, errors) && styles.inputError,
      ]}
      placeholder={field.placeholder}
      onFocus={() => handleFieldFocus(field.key)}
      placeholderTextColor={colors['black-300']}
      autoCapitalize="none"
      value={inputs[field.key]}
      maxLength={field.maxLength}
      onChangeText={(newText) => handleInputChange(field.key, newText)}
    />
  )

  async function onEditProfile() {
    try {
      const errors = Object.keys(inputs).filter(
        (input: FieldsEditProfile) => !validateInputs(input, inputs),
      )

      setError([...errors])

      if (errors.length === 0) {
        await editProfile(inputs)

        if (inputs.email !== '') {
          removeToken()
          removeUserData()
          redirect.onRedirect('/Login')
        } else {
          redirect.onRedirect('/Home')
        }
      }
    } catch (error) {
      return error
    }
  }

  return (
    <View style={styles.editProfileContainer}>
      <Header title="Editar Perfil" isRedirect />

      <View style={styles.editProfileFormContainer}>
        <Pressable onPress={toggleModal} style={styles.imageProfile}>
          {renderProfileImage()}
        </Pressable>
        {isOpenModal && (
          <ModalSelectImage
            onSelectCharacter={onSelectCharacter}
            onCloseModal={toggleModal}
          />
        )}

        {fields.map((field) => (
          <View key={field.key} style={styles.inputsContainer}>
            {renderTextInput(field)}
          </View>
        ))}

        <TextInput
          style={[
            inputFocused !== 'dateOfBirth'
              ? styles.inputEditProfile
              : styles.inputEditProfileFocused,
            onErrorInput('dateOfBirth', errors) && styles.inputError,
          ]}
          placeholder="Data de Nascimento"
          onFocus={() => handleFieldFocus('dateOfBirth')}
          placeholderTextColor={colors['black-300']}
          autoCapitalize="none"
          value={inputs.dateOfBirth}
          maxLength={10}
          onChangeText={(newText) =>
            setInputs({
              ...inputs,
              dateOfBirth: handleDateChange(newText),
            })
          }
        />

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.buttonEditProfile}>
            <Text style={styles.textButton}>Alterar Senha</Text>
          </Pressable>
          <Pressable style={styles.buttonEditProfile} onPress={onEditProfile}>
            <Text style={styles.textButton}>Salvar Informações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
