import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserDataContext'
import { IResponses } from '../ui/screens/ConnectWords'

export const useConnectWords = () => {
  const { token } = useContext(TokenContext)
  const { updateUserLevelData } = useContext(UserContext)

  async function getWordsToConnect() {
    try {
      const response = await api.get('/connectWords', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function finallyConnectWords(responses: IResponses[]) {
    try {
      const response = await api.post('/connectWords', responses, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const { level, breakthrough, matches, correct, wrong } = response.data

      updateUserLevelData({ level, breakthrough, matches, correct, wrong })
      return response.data
    } catch (error) {
      return error
    }
  }

  return {
    getWordsToConnect,
    finallyConnectWords,
  }
}
