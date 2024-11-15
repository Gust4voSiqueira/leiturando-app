import { useContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserDataContext'
import { IFinnallyWordsDTO, IWordDTO } from '../dtos/WordDTO'
import { handleError } from '../utils/isError'
import { useNavigation } from '@react-navigation/native'

export const useWords = () => {
  const [ data, setData ] = useState<IWordDTO[]>([])

  const { navigate } = useNavigation()
  const { token } = useContext(TokenContext)
  const { updateUserLevelData } = useContext(UserContext)

  useEffect(() => {
    getWords()
  }, [])

  async function getWords() {
    try {
      const response = await api.get('/words', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setData(response.data)
    } catch (error) {
      handleError(() => navigate('home', { isReloadRanking: false }))
    }
  }

  async function finallyWords(words: IWordDTO[], responses: string[]) {
    try {
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
    data,
    getWords,
    finallyWords,
  }
}
