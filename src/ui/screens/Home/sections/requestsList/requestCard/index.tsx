import { useContext, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from './styles'
import { Check, X } from 'phosphor-react-native'
import { RequestsContext } from '../../../../../../contexts/RequestsContext'
import { charactersImages } from '../../../../../../utils/charactersImages'
import { Box, Pressable, Text, theme } from 'native-base'

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
          <X size={18} color={theme.colors.white} />
        </Pressable>
        <Pressable
          style={styles.responseFriendButtonAccept}
          onPress={() => acceptRequest(idUser)}
        >
          <Check size={18} color={theme.colors.white} />
        </Pressable>
      </>
    )
  } else if (typeCard === 'SubmittedRequest') {
    return (
      <Pressable
        bg={'red.600'}
        paddingX={2}
        borderRadius={3}
        marginX={5}
        onPress={cancelRequest}
        _pressed={{
          bg: 'gray.500',
        }}
      >
        <Text style={styles.responseFriendText}>Cancelar</Text>
      </Pressable>
    )
  }

  return (
    <Pressable
      bg={'gray.500'}
      paddingX={2}
      borderRadius={3}
      marginX={5}
      onPress={() => sendRequest(idUser)}
      _pressed={{
        bg: 'gray.500',
      }}
    >
      <Text style={styles.responseFriendText}>Adicionar</Text>
    </Pressable>
  )
}

interface IRequestCard {
  id: number
  image: string
  name: string
  mutualFriends: number
  typeCard: string
  onRemoveRequest?: (id: number) => void
  onAcceptRequest?: (id: number) => void
}

export function RequestCard({
  id,
  image,
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

  const characterImage = charactersImages(50, 50).find(
    (character) => character.name === image,
  ).image

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
      <Box bg={'gray.700'} style={styles.requestCardLoad}>
        <ActivityIndicator size="small" style={styles.load} />
      </Box>
    )

  return (
    <Box bg={'gray.700'} style={styles.requestCard}>
      <View style={styles.imageUserRequest}>{characterImage}</View>

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
    </Box>
  )
}
