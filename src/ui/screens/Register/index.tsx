import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'

import { useState } from 'react'
import Toast from 'react-native-toast-message'

import { FormRegister } from './Form'
import { View } from 'react-native'
import { ModalSelectImage } from '../../components/ModalCharacters'
import { AppError } from '../../../utils/AppError'
import { validateDate } from '../../../utils/ValidateData'
import { CharactersDTO, IUserRegisterDTO } from '../../../dtos/UserDTO'
import { useUser } from '../../../hooks/useUser'

export function Register() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [characterName, setCharacterName] = useState<CharactersDTO>()
  const { register, login } = useUser()

  function toggleModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character: CharactersDTO) {
    setCharacterName(character)
    toggleModal()
  }

  async function onSubmitRegister(inputs: IUserRegisterDTO) {
    try {
      const dataRegister = {
        ...inputs,
        characterName,
      }

      validateDate(inputs.dateOfBirth)

      await register(dataRegister)
      await login(dataRegister.email, dataRegister.password)
    } catch (error) {
      const isAppError = error instanceof AppError

      const title = isAppError
        ? error.message
        : 'Não foi possível cadastrar-se. Tente novamente mais tarde.'

      Toast.show({
        type: 'error',
        text1: 'Cadastro',
        text2: title,
      })
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
