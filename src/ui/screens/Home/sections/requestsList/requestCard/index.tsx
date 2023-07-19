/* eslint-disable jsx-a11y/alt-text */
import { Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { Check, X } from 'phosphor-react-native'
import { colors } from '../../../../../../../global/themes/default'
import { useRequests } from '../../../../../../hooks/useRequests'
import { useState } from 'react'

interface IHandleButton {
  idUser: number
  typeCard: string
  sendRequest: () => void
  deleteRequest: (idUser: number) => void
  acceptRequest: (idUser: number) => void
}

function HandleButton({
  idUser,
  typeCard,
  sendRequest,
  deleteRequest,
  acceptRequest,
}: IHandleButton) {
  if (typeCard === 'Request') {
    return (
      <>
        <Pressable
          style={styles.responseFriendButtonReject}
          onPress={() => deleteRequest(idUser)}
        >
          <X size={18} color={colors.white} />
        </Pressable>
        <Pressable
          style={styles.responseFriendButtonAccept}
          onPress={() => acceptRequest(idUser)}
        >
          <Check size={18} color={colors.white} />
        </Pressable>
      </>
    )
  } else if (typeCard === 'SubmittedRequest') {
    return (
      <Pressable
        style={styles.responseFriendButton}
        onPress={() => deleteRequest(idUser)}
      >
        <Text style={styles.responseFriendText}>Cancelar</Text>
      </Pressable>
    )
  }

  return (
    <Pressable style={styles.responseFriendButton} onPress={sendRequest}>
      <Text style={styles.responseFriendText}>Adicionar</Text>
    </Pressable>
  )
}

interface IRequestCard {
  id: number
  imageUrl: string
  name: string
  mutualFriends: number
  typeCard: string
  onRemoveRequest?: (id: number) => void
  onAcceptRequest?: (id: number) => void
}

export function RequestCard({
  id,
  imageUrl,
  name,
  mutualFriends,
  typeCard,
  onRemoveRequest,
  onAcceptRequest,
}: IRequestCard) {
  const [typeCardState, setTypeCardState] = useState(typeCard)
  const { sendRequest } = useRequests()

  async function onSendRequest() {
    const response = await sendRequest(id)

    if (response === 200) {
      setTypeCardState('SubmittedRequest')
    }
  }

  return (
    <View style={styles.requestCard}>
      {/* <Image
        style={styles.imageUserRequest}
        source={{
          uri: imageUrl,
        }}
      /> */}

      <Image
        source={{ uri: `data:image/jpeg;base64,${imageUrl}` }}
        style={styles.imageUserRequest}
      />

      <View style={styles.infoRequestContainer}>
        <Text style={styles.nameUserRequest}>{name}</Text>
        {mutualFriends === 1 ? (
          <Text style={styles.quantitiFriendsCommon}>
            {mutualFriends} amigo em comum
          </Text>
        ) : (
          <Text style={styles.quantitiFriendsCommon}>
            {mutualFriends} amigos em comum
          </Text>
        )}

        <View style={styles.buttonsContainer}>
          <HandleButton
            idUser={id}
            sendRequest={onSendRequest}
            deleteRequest={onRemoveRequest}
            acceptRequest={onAcceptRequest}
            typeCard={typeCardState}
          />
        </View>
      </View>
    </View>
  )
}
