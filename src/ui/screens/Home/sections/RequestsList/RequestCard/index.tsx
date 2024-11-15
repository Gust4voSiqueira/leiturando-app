import { useContext, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import { RequestsContext } from '../../../../../../contexts/RequestsContext'
import { charactersImages } from '../../../../../../utils/CharactersImages'
import { styles } from './styles'
import { RenderButtons } from './RenderButton'
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'
import { handleError } from '../../../../../../utils/isError'

interface IRequestCard {
  id: number
  image: string
  name: string
  mutualFriends: number
  typeCard: string
  handleCloseModal: () => void
}

export function RequestCard({
  id,
  image,
  name,
  mutualFriends,
  typeCard,
  handleCloseModal,
}: IRequestCard) {
  const {
    onRemoveRequestSend,
    onRemoveRequestReceived,
    onAcceptRequest,
    onSendRequest,
  } = useContext(RequestsContext)
  const [isLoading, setIsLoading] = useState(false)
  const textMutualFriends =
    mutualFriends === 1
      ? `${mutualFriends} amigo em comum`
      : `${mutualFriends} amigos em comum`

  const characterImage = charactersImages(50, 50).find(
    (character) => character.name === image,
  ).image

  function handleCancelRequest() {
    try {
      setIsLoading(true)
      onRemoveRequestSend(id)
    } catch (error) {
      handleError(handleCloseModal)
    }
  }

  function handleRemoveRequest() {
    try {
      setIsLoading(true)
      onRemoveRequestReceived(id)
    } catch (error) {
      handleError(handleCloseModal)
    }
  }

  function handleSendRequest() {
    try {
      setIsLoading(true)
      onSendRequest(id)
    } catch (error) {
      handleError(handleCloseModal)
    }
  }

  function handleAcceptRequest() {
    try {
      setIsLoading(true)
      onAcceptRequest(id)
    } catch (error) {
      handleError(handleCloseModal)
    }
  }

  if (isLoading)
    return (
      <View style={styles.requestCardLoad}>
        <ActivityIndicator size="small" style={styles.load} />
      </View>
    )

  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutRight}
      layout={Layout.springify()}
    >
      <View style={styles.requestCard}>
        <View style={styles.imageUserRequest}>{characterImage}</View>

        <View style={styles.infoRequestContainer}>
          <Text style={styles.nameUserRequest}>{name}</Text>
          <Text style={styles.quantitiFriendsCommon}>{textMutualFriends}</Text>

          <View style={styles.buttonsContainer}>
            <RenderButtons
              idUser={id}
              sendRequest={handleSendRequest}
              cancelRequest={handleCancelRequest}
              deleteRequest={handleRemoveRequest}
              acceptRequest={handleAcceptRequest}
              typeCard={typeCard}
            />
          </View>
        </View>
      </View>
    </Animated.View>
  )
}
