import { Pressable, Text } from 'react-native'
import { styles } from './styles'
import { colors } from '../../../../../../global/themes/default'
import { Check, X } from 'phosphor-react-native'

interface IRequestReceivedButton {
  idUser: number
  deleteRequest: () => void
  acceptRequest: (idUser: number) => void
}

interface IRequestSendButton {
  cancelRequest: () => void
}

interface IFriendButton {
  idUser: number
  unfriend: (idUser: number) => void
}

interface IDefaultButton {
  idUser: number
  sendRequest: (idUser: number) => void
}

export function RequestReceivedButton({
  acceptRequest,
  deleteRequest,
  idUser,
}: IRequestReceivedButton) {
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
}

export function RequestSendButton({ cancelRequest }: IRequestSendButton) {
  return (
    <Pressable style={styles.cancelRequestButton} onPress={cancelRequest}>
      <Text style={styles.responseFriendText}>Cancelar</Text>
    </Pressable>
  )
}

export function FriendButton({ idUser, unfriend }: IFriendButton) {
  return (
    <Pressable
      style={styles.responseFriendButton}
      onPress={() => unfriend(idUser)}
    >
      <Text style={styles.responseFriendText}>Desfazer amizade</Text>
    </Pressable>
  )
}

export function DefaultButton({ idUser, sendRequest }: IDefaultButton) {
  return (
    <Pressable
      style={styles.responseFriendButton}
      onPress={() => sendRequest(idUser)}
    >
      <Text style={styles.responseFriendText}>Adicionar</Text>
    </Pressable>
  )
}
