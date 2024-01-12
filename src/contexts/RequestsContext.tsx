import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRequests } from '../hooks/useRequests'
import { Alert } from 'react-native'
import { TokenContext } from './TokenContext'

interface IRequest {
  id: number
  image: string
  name: string
  mutualFriends: number
}

export interface IRequests {
  friends: {
    id: number
    image: string
    name: string
  }[]
  requests: IRequest[]
  requestsSend: IRequest[]
  usersRecommended: IRequest[]
}

interface RequestsContextType {
  requests: IRequests
  onRemoveRequestReceived: (id: number) => void
  onRemoveRequestSend: (id: number) => void
  onAcceptRequest: (id: number) => void
  onLoadRequests: () => void
  onSendRequest: (id: number) => void
  clearRequests: () => void
}

export const RequestsContext = createContext({} as RequestsContextType)

interface RequestsContextProviderProps {
  children: ReactNode
}

export function RequestsContextProvider({
  children,
}: RequestsContextProviderProps) {
  const { getRequests } = useRequests()
  const [requests, setRequests] = useState<IRequests>()
  const { removeRequest, acceptRequest, sendRequest } = useRequests()
  const { token } = useContext(TokenContext)

  useEffect(() => {
    onLoadRequests()
  }, [])

  useEffect(() => {
    onLoadRequests()
  }, [token])

  async function onLoadRequests() {
    try {
      const requests = await getRequests()

      setRequests(requests)
    } catch (err) {
      Alert.alert(
        'Falha ao buscar solicitações',
        'Tivemos uma falha no servidor. Por favor tente novamente mais tarde.',
      )
    }
  }

  async function onRemoveRequestReceived(id: number) {
    try {
      await removeRequest(id)

      const user = requests.requests.find((request) => request.id === id)

      const newRequestsReceived = requests.requests.filter(
        (request) => request !== user,
      )

      setRequests({
        ...requests,
        requests: newRequestsReceived,
        usersRecommended: [...requests.usersRecommended, user],
      })
    } catch (err) {
      return err
    }
  }

  async function onRemoveRequestSend(id: number) {
    try {
      await removeRequest(id)

      const user = requests.requestsSend.find((request) => request.id === id)

      const newRequestsSend = requests.requestsSend.filter(
        (request) => request !== user,
      )

      setRequests({
        ...requests,
        requestsSend: newRequestsSend,
        usersRecommended: [...requests.usersRecommended, user],
      })
    } catch (err) {
      return err
    }
  }

  async function onAcceptRequest(id: number) {
    try {
      await acceptRequest(id)

      const user = requests.requests.find((request) => request.id === id)

      const newRequestsReceived = requests.requests.filter(
        (request) => request !== user,
      )

      setRequests({
        ...requests,
        friends: [...requests.friends, user],
        requests: newRequestsReceived,
      })
    } catch (err) {
      return err
    }
  }

  async function onSendRequest(id: number) {
    try {
      await sendRequest(id)

      const user = requests.usersRecommended.find((user) => user.id === id)

      const newUsersRecommended = requests.usersRecommended.filter(
        (userRecommended) => userRecommended.id !== id,
      )

      setRequests({
        ...requests,
        usersRecommended: newUsersRecommended,
        requestsSend: [...requests.requestsSend, user],
      })
    } catch (err) {
      return err
    }
  }

  function clearRequests() {
    setRequests({} as IRequests)
  }

  return (
    <RequestsContext.Provider
      value={{
        requests,
        onRemoveRequestReceived,
        onRemoveRequestSend,
        onAcceptRequest,
        onLoadRequests,
        onSendRequest,
        clearRequests,
      }}
    >
      {children}
    </RequestsContext.Provider>
  )
}
