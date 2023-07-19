/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'

import { styles } from './styles'

import { Characters } from './characters'
import DefaultUser from '../../../../../assets/defaultUser.svg'

interface IModalSelectImage {
  selectImage: () => void
  onSelectCharacter: (character: String) => void
}

export function ModalSelectImage({
  selectImage,
  onSelectCharacter,
}: IModalSelectImage) {
  return (
    <>
      <View style={styles.deepShadow}></View>
      <View style={styles.modalContainer}>
        <Pressable style={styles.imageSelect} onPress={selectImage}>
          <DefaultUser />
          <Text style={styles.textSelect}>Galeria</Text>
        </Pressable>
        {Characters.map((character, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => onSelectCharacter(character.name)}
            >
              <Image source={character.image} style={styles.image} />
            </Pressable>
          )
        })}
      </View>
    </>
  )
}
