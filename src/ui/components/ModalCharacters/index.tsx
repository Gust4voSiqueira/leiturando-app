import { Pressable, Text, View } from 'react-native'

import { styles } from './styles'
import { charactersImages } from '../../../utils/charactersImages'

interface IModalSelectImage {
  onSelectCharacter: (character: String) => void
  onCloseModal: () => void
}

export function ModalSelectImage({
  onSelectCharacter,
  onCloseModal,
}: IModalSelectImage) {
  return (
    <>
      <View style={styles.deepShadow} />
      <View style={styles.modalContainer}>
        {charactersImages(60, 60).map((character, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => onSelectCharacter(character.name)}
              style={styles.image}
            >
              {character.image}
            </Pressable>
          )
        })}

        <View style={styles.cancelSelectionContainer}>
          <Pressable style={styles.cancelSelection} onPress={onCloseModal}>
            <Text>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
