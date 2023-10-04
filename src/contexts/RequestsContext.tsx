import { ReactNode, createContext, useState } from 'react'
import { useRequests } from '../hooks/useRequests'

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

  async function onLoadRequests() {
    try {
      const requests = await getRequests()

      setRequests(requests)
    } catch (err) {
      return err
    }
  }

  async function onRemoveRequestReceived(id: number) {
    try {
      const response = await removeRequest(id)

      const user = requests.requests.find(
        (request) => request.id === response?.id,
      )

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
      const response = await removeRequest(id)

      const user = requests.requestsSend.find(
        (request) => request.id === response?.id,
      )

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
      const response = await acceptRequest(id)

      const user = requests.requests.find(
        (request) => request.id === response?.id,
      )

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
      const user = await sendRequest(id)

      const newUsersRecommended = requests.usersRecommended.filter(
        (userRecommended) => userRecommended.id !== user.id,
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

  return (
    <RequestsContext.Provider
      value={{
        requests,
        onRemoveRequestReceived,
        onRemoveRequestSend,
        onAcceptRequest,
        onLoadRequests,
        onSendRequest,
      }}
    >
      {children}
    </RequestsContext.Provider>
  )
}
