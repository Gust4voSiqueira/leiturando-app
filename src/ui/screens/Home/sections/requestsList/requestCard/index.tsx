/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from 'react'
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { Check, X } from 'phosphor-react-native'
import { colors } from '../../../../../../../global/themes/default'
import { RequestsContext } from '../../../../../../contexts/RequestsContext'

interface IHandleButton {
  idUser: number
  typeCard: string
  sendRequest: (id: number) => void
  cancelRequest: () => void
  deleteRequest: () => void
  acceptRequest: (idUser: number) => void
}

function HandleButton({
  idUser,
  typeCard,
  sendRequest,
  cancelRequest,
  deleteRequest,
  acceptRequest,
}: IHandleButton) {
  if (typeCard === 'Request') {
    return (
      <>
        <Pressable
          style={styles.responseFriendButtonReject}
          onPress={deleteRequest}
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
      <Pressable style={styles.cancelRequestButton} onPress={cancelRequest}>
        <Text style={styles.responseFriendText}>Cancelar</Text>
      </Pressable>
    )
  }

  return (
    <Pressable
      style={styles.responseFriendButton}
      onPress={() => sendRequest(idUser)}
    >
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
}: IRequestCard) {
  const {
    onRemoveRequestSend,
    onRemoveRequestReceived,
    onAcceptRequest,
    onSendRequest,
  } = useContext(RequestsContext)
  const [isLoading, setIsLoading] = useState(false)

  function handleCancelRequest() {
    setIsLoading(true)
    onRemoveRequestSend(id)
  }

  function handleRemoveRequest() {
    setIsLoading(true)
    onRemoveRequestReceived(id)
  }

  if (isLoading)
    return (
      <View style={styles.requestCardLoad}>
        <ActivityIndicator size="small" style={styles.load} />
      </View>
    )

  return (
    <View style={styles.requestCard}>
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
            cancelRequest={handleCancelRequest}
            deleteRequest={handleRemoveRequest}
            acceptRequest={onAcceptRequest}
            typeCard={typeCard}
          />
        </View>
      </View>
    </View>
  )
}
