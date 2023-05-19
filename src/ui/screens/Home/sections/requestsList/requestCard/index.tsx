/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'

interface IHandleButton {
  typeCard: string
}

function HandleButton({ typeCard }: IHandleButton) {
  if (typeCard === 'Request') {
    return (
      <>
        <Pressable style={styles.responseFriendButton}>
          <Text style={styles.responseFriendText}>Remover</Text>
        </Pressable>
        <Pressable style={styles.responseFriendButton}>
          <Text style={styles.responseFriendText}>Aceitar</Text>
        </Pressable>
      </>
    )
  } else if (typeCard === 'SubmittedRequest') {
    return (
      <Pressable style={styles.responseFriendButton}>
        <Text style={styles.responseFriendText}>Cancelar Solicitação</Text>
      </Pressable>
    )
  }

  return (
    <Pressable style={styles.responseFriendButton}>
      <Text style={styles.responseFriendText}>Enviar Solicitação</Text>
    </Pressable>
  )
}

interface IRequestCard {
  uriImage: string
  name: string
  friendsCommon: number
  typeCard: string
}

export function RequestCard({
  uriImage,
  name,
  friendsCommon,
  typeCard,
}: IRequestCard) {
  return (
    <View style={styles.requestCard}>
      <Image
        style={styles.imageUserRequest}
        source={{
          uri: uriImage,
        }}
      />

      <View style={styles.infoRequestContainer}>
        <Text style={styles.nameUserRequest}>{name}</Text>
        <Text style={styles.quantitiFriendsCommon}>
          {friendsCommon} amigos em comum
        </Text>

        <View style={styles.buttonsContainer}>
          <HandleButton typeCard={typeCard} />
        </View>
      </View>
    </View>
  )
}
