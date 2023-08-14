import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'

type idRequested = number

export const useRequests = () => {
  const { token } = useContext(TokenContext)

  async function sendRequest(idRequested: idRequested) {
    try {
      const response = await api.post(
        `request/send/${idRequested}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      return response.data
    } catch (error) {
      return error
    }
  }

  async function removeRequest(idRequester: idRequested) {
    try {
      const response = await api.delete(`request/remove/${idRequester}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function acceptRequest(idRequester: idRequested) {
    try {
      const response = await api.post(
        `request/accept/${idRequester}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      return response.data
    } catch (error) {
      return error
    }
  }

  async function getRequests() {
    try {
      const response = await api.get('/request/getRequests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  return {
    sendRequest,
    removeRequest,
    acceptRequest,
    getRequests,
  }
}
