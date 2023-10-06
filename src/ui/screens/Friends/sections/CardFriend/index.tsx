import { ActivityIndicator, Text, View } from 'react-native'
import { styles } from './styles'
import { charactersImages } from '../../../../../utils/charactersImages'
import { useContext, useState } from 'react'
import {
  DefaultButton,
  FriendButton,
  RequestReceivedButton,
  RequestSendButton,
} from './buttons'
import { RequestsContext } from '../../../../../contexts/RequestsContext'
import { useUserRequest } from '../../../../../hooks/useUserRequest'
import { Box } from 'native-base'

interface ICardFiendsSection {
  id: number
  image: string
  name: string
  mutualFriends?: number
  typeCard: string
  cleanResultsSearch: () => void
}

export function CardFriendsSection({
  id,
  image,
  name,
  mutualFriends,
  typeCard,
  cleanResultsSearch,
}: ICardFiendsSection) {
  const {
    onSendRequest,
    onRemoveRequestSend,
    onRemoveRequestReceived,
    onAcceptRequest,
  } = useContext(RequestsContext)
  const { unfriend } = useUserRequest()
  const [isLoading, setIsLoading] = useState(false)
  const characterImage = charactersImages(60, 60).find(
    (character) => character.name === image,
  ).image

  function handleCancelRequest() {
    setIsLoading(true)
    onRemoveRequestSend(id)
    cleanResultsSearch()
  }

  function handleRemoveRequest() {
    setIsLoading(true)
    onRemoveRequestReceived(id)
    cleanResultsSearch()
  }

  function handleOnAcceptRequest() {
    setIsLoading(true)
    onAcceptRequest(id)
    cleanResultsSearch()
  }

  function handleUnfriend() {
    setIsLoading(true)
    unfriend(id)
    cleanResultsSearch()
  }

  function handleSendRequest() {
    setIsLoading(true)
    onSendRequest(id)
    cleanResultsSearch()
  }

  const handleButton = {
    REQUEST_RECEIVED: (
      <RequestReceivedButton
        acceptRequest={handleOnAcceptRequest}
        deleteRequest={handleRemoveRequest}
        idUser={id}
      />
    ),
    REQUEST_SEND: <RequestSendButton cancelRequest={handleCancelRequest} />,
    FRIEND: <FriendButton idUser={id} unfriend={handleUnfriend} />,
  }

  if (isLoading)
    return (
      <Box bg={'gray.700'} style={styles.cardFriendsContainer}>
        <ActivityIndicator size="small" style={styles.load} />
      </Box>
    )

  return (
    <Box bg={'gray.700'} style={styles.cardFriendsContainer}>
      <View style={styles.imageUserRequest}>{characterImage}</View>

      <View style={styles.infoRequestContainer}>
        <Text style={styles.nameUserRequest}>{name}</Text>
        {mutualFriends >= 0 ? (
          <Text style={styles.quantitiFriendsCommon}>
            {mutualFriends} amigo(s) em comum
          </Text>
        ) : (
          <Text style={styles.quantitiFriendsCommon}>Vocês são amigos</Text>
        )}

        <View style={styles.buttonsContainer}>
          {handleButton[typeCard] || (
            <DefaultButton idUser={id} sendRequest={handleSendRequest} />
          )}
        </View>
      </View>
    </Box>
  )
}
