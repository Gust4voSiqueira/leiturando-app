/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'
import { colors } from '../../../../global/themes/default'
import { useContext, useState } from 'react'
import { UserContext } from '../../../contexts/UserDataContext'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { Characters } from '../Register'
import { Characters as CharactersList } from '../../components/ModalCharacters/characters'
import { useUserRequest } from '../../../hooks/useUserRequest'

const fields = [
  { key: 'name', placeholder: 'Nome' },
  { key: 'email', placeholder: 'Email' },
  { key: 'dateOfBirth', placeholder: 'Data de Nascimento' },
  { key: 'password', placeholder: 'Senha' },
]

export function EditProfile() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [characterName, setCharacterName] = useState<Characters>()
  const { userData } = useContext(UserContext)
  const [inputFocused, setInputFocused] = useState<String>()
  const { editProfile } = useUserRequest()
  const imageCharacter = CharactersList.find(
    (character) => character.name === characterName,
  )
  const image = CharactersList.find(
    (character) => character.name === userData.image,
  )

  const renderProfileImage = () => {
    if (image) {
      return <Image source={image.image} style={styles.imageProfile} />
    } else {
      return <Image source={imageCharacter.image} style={styles.imageProfile} />
    }
  }

  function onOpenModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character: Characters) {
    setCharacterName(character)
    onOpenModal()
  }

  const handleFieldFocus = (fieldKey: string) => {
    setInputFocused(fieldKey)
  }

  const handleInputChange = (fieldKey: string, newText: string) => {
    setInputs((prevInputs) => ({ ...prevInputs, [fieldKey]: newText }))
  }

  async function sendRequest() {
    try {
      await editProfile(inputs)
    } catch (error) {
      return error
    }
  }

  const renderTextInput = (field) => (
    <TextInput
      style={
        inputFocused !== field.key
          ? styles.inputEditProfile
          : styles.inputEditProfileFocused
      }
      placeholder={field.placeholder}
      onFocus={() => handleFieldFocus(field.key)}
      placeholderTextColor={colors['black-300']}
      value={inputs[field.key]}
      onChangeText={(newText) => handleInputChange(field.key, newText)}
    />
  )

  return (
    <View style={styles.editProfileContainer}>
      <Header title="Editar Perfil" isRedirect />

      <View style={styles.editProfileFormContainer}>
        <Pressable onPress={onOpenModal}>{renderProfileImage()}</Pressable>
        {isOpenModal && (
          <ModalSelectImage onSelectCharacter={onSelectCharacter} />
        )}

        {fields.map((field) => (
          <View key={field.key} style={styles.inputsContainer}>
            {renderTextInput(field)}
          </View>
        ))}

        <View style={styles.buttonsContainer}>
          <Pressable style={styles.buttonEditProfile}>
            <Text style={styles.textButton}>Alterar Senha</Text>
          </Pressable>
          <Pressable style={styles.buttonEditProfile} onPress={sendRequest}>
            <Text style={styles.textButton}>Salvar Informações</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
