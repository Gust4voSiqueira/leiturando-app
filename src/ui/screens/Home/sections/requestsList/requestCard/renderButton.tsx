import { Pressable, Text, theme } from 'native-base'
import { Check, X } from 'phosphor-react-native'
import { styles } from './styles'

interface IHandleButton {
  idUser: number
  typeCard: string
  sendRequest: (id: number) => void
  cancelRequest: () => void
  deleteRequest: () => void
  acceptRequest: (idUser: number) => void
}

export function RenderButtons({
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
