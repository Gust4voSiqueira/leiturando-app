/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'

import { styles } from './styles'

import { Characters } from './characters'

interface IModalSelectImage {
  onSelectCharacter: (character: String) => void
}

export function ModalSelectImage({ onSelectCharacter }: IModalSelectImage) {
  return (
    <>
      <View style={styles.deepShadow} />
      <View style={styles.modalContainer}>
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

        <View style={styles.cancelSelectionContainer}>
          <Pressable style={styles.cancelSelection}>
            <Text>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
