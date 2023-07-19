/* eslint-disable jsx-a11y/alt-text */
import { ImageSourcePropType, View } from 'react-native'
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
  image?: ImagePicker.Asset
  type: 'character' | 'galery'
}

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
  const [image, setImage] = useState<IImage>()
  const [characterName, setCharacterName] = useState<Characters>()
  const { register } = useUserRequest()
  const navigation = useNavigation<LoginScreenNavigationProp>()

  const selectImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        const newImage: IImage = {
          sourceString: response.assets[0].uri,
          image: response.assets[0],
          type: 'galery',
        }
        setImage(newImage)
        setCharacterName(null)
        onOpenModal()
      },
    )
  }

  function onOpenModal() {
    setIsOpenModal(!isOpenModal)
  }

  function onSelectCharacter(character: Characters) {
    setCharacterName(character)
    setImage(null)
    onOpenModal()
  }

  function onSubmitRegister(inputs: IInputs) {
    const dataRegister = {
      ...inputs,
      characterName,
      file: image,
    }

    const response = register(dataRegister)

    if (response) {
      navigation.navigate('Login')
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
        characterSelected={characterName}
        onOpenModal={onOpenModal}
        onRegisterFunction={onSubmitRegister}
      />
    </View>
  )
}
