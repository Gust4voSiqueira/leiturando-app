/* eslint-disable jsx-a11y/alt-text */
import { View, ImageSourcePropType } from 'react-native'
import { globalStyles } from '../../../../global/global'

import Logo from '../../../../assets/logo.svg'

import * as ImagePicker from 'react-native-image-picker'
import { useState } from 'react'

import { ModalSelectImage } from './Modal'
import { FormRegister, IInputs } from './Form'
import { useUserRequest } from '../../../hooks/useUserRequest'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../routes/types'

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>

export interface IImage {
  source?: ImageSourcePropType
  sourceString?: string
  type: 'character' | 'galery'
}

export function Register() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [image, setImage] = useState<IImage>()
  const { register } = useUserRequest()
  const navigation = useNavigation<LoginScreenNavigationProp>()

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        onOpenModal()
        const newImage: IImage = {
          sourceString: response.assets[0].uri,
          type: 'galery',
        }
        setImage(newImage)
      },
    )
  }

  function onOpenModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character) {
    const newImage: IImage = {
      source: character,
      type: 'character',
    }
    setImage(newImage)
    onOpenModal()
  }

  function onSubmitRegister(inputs: IInputs) {
    const dataRegister = {
      characterName: 'Batman',
      ...inputs,
    }
    const response = register(dataRegister)

    const { email, password } = inputs

    if (response) {
      const emailUser = email as string
      const passwordUser = password as string
      navigation.navigate('Login', { email: emailUser, password: passwordUser })
    }
  }

  return (
    <View style={globalStyles.container}>
      <Logo width={280} height="20%" />
      {isOpenModal && (
        <ModalSelectImage
          selectImage={selectImage}
          onSelectCharacter={onSelectCharacter}
        />
      )}

      <FormRegister
        image={image}
        onOpenModal={onOpenModal}
        onRegisterFunction={onSubmitRegister}
      />
    </View>
  )
}
