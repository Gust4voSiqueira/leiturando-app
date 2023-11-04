import { useContext, useState } from 'react'
import { ActivityIndicator, Alert, View } from 'react-native'

import { RequestsContext } from '../../../../../../contexts/RequestsContext'
import { charactersImages } from '../../../../../../utils/CharactersImages'
import { Box, Text } from 'native-base'
import { styles } from './styles'
import { RenderButtons } from './RenderButton'
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'

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

  function handleFail() {
    Alert.alert(
      'Falha no servidor',
      'Tivemos uma falha no servidor, {\n} por favor tente novamente mais tarde.',
      [
        {
          text: 'Ok',
          onPress: () => handleCloseModal,
        },
      ],
    )
  }

  function handleCancelRequest() {
    try {
      setIsLoading(true)
      onRemoveRequestSend(id)
    } catch (error) {
      handleFail()
    }
  }

  function handleRemoveRequest() {
    try {
      setIsLoading(true)
      onRemoveRequestReceived(id)
    } catch (error) {
      handleFail()
    }
  }

  function handleSendRequest() {
    try {
      setIsLoading(true)
      onSendRequest(id)
    } catch (error) {
      handleFail()
    }
  }

  function handleAcceptRequest() {
    try {
      setIsLoading(true)
      onAcceptRequest(id)
    } catch (error) {
      handleFail()
    }
  }

  if (isLoading)
    return (
      <Box bg={'gray.700'} height={20} style={styles.requestCardLoad}>
        <ActivityIndicator size="small" style={styles.load} />
      </Box>
    )

  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutRight}
      layout={Layout.springify()}
    >
      <Box bg={'gray.700'} height={20} style={styles.requestCard}>
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
      </Box>
    </Animated.View>
  )
}
