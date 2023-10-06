import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'

import { useState } from 'react'

import { FormRegister, IInputs } from './Form'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { ModalSelectImage } from '../../components/ModalCharacters'

export type Characters =
  | 'batman'
  | 'robin'
  | 'superman'
  | 'wonderMan'
  | 'thor'
  | 'spiderMan'
  | 'joker'
  | 'harry'
  | 'wolverine'

export function Register() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [characterName, setCharacterName] = useState<Characters>()
  const { register } = useUserRequest()
  const navigation = useNavigation()

  function toggleModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character: Characters) {
    setCharacterName(character)
    toggleModal()
  }

  function onSubmitRegister(inputs: IInputs) {
    const dataRegister = {
      ...inputs,
      characterName,
    }

    const response = register(dataRegister)

    if (response) {
      navigation.navigate('login')
    }
  }

  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="20%" />
      {isOpenModal && (
        <ModalSelectImage
          onSelectCharacter={onSelectCharacter}
          onCloseModal={toggleModal}
        />
      )}

      <FormRegister
        characterSelected={characterName}
        onOpenModal={toggleModal}
        onRegisterFunction={onSubmitRegister}
      />
    </View>
  )
}
