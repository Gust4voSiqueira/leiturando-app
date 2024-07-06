import { Check, X } from 'phosphor-react-native'
import { styles } from './styles'
import { THEME } from '../../../../../../../global/theme'
import { Pressable, Text } from 'react-native'

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
          <X size={18} color={THEME.colors.white} />
        </Pressable>
        <Pressable
          style={styles.responseFriendButtonAccept}
          onPress={() => acceptRequest(idUser)}
        >
          <Check size={18} color={THEME.colors.white} />
        </Pressable>
      </>
    )
  } else if (typeCard === 'SubmittedRequest') {
    return (
      <Pressable style={styles.buttonSubmittedRequest} onPress={cancelRequest}>
        <Text style={styles.responseFriendText}>Cancelar</Text>
      </Pressable>
    )
  }

  return (
    <Pressable
      style={styles.buttonSendRequest}
      onPress={() => sendRequest(idUser)}
    >
      <Text style={styles.responseFriendText}>Adicionar</Text>
    </Pressable>
  )
}
