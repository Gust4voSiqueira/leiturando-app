import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserDataContext'
import { IFinnallyWordsDTO, IWordDTO } from '../dtos/WordDTO'

export const useWords = () => {
  const { token } = useContext(TokenContext)
  const { updateUserLevelData } = useContext(UserContext)

  async function getWords() {
    try {
      const response = await api.get('/words', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function finallyWords(words: IWordDTO[], responses: string[]) {
    try {
      console.log(responses)
      const request: IFinnallyWordsDTO = {
        wordIds: words.map((word) => word.id),
        responses,
      }

      const response = await api.post('/words', request, {
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
    getWords,
    finallyWords,
  }
}
