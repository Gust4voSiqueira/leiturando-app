import { Text, View } from 'react-native'

import { styles } from './styles'
import { charactersImages } from '../../../utils/CharactersImages'
import { Pressable } from 'native-base'

interface IModalSelectImage {
  onSelectCharacter: (character: string) => void
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
          <Pressable
            bgColor={'green.500'}
            style={styles.cancelSelection}
            onPress={onCloseModal}
          >
            <Text>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
