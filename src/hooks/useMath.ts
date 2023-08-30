import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'

export type IOperations =
  | 'SUBTRACTION'
  | 'ADDITION'
  | 'MULTIPLICATION'
  | 'DIVISION'

export interface IFinnallyMath {
  number1: number
  number2: number
  response: number
  operation: IOperations
}

export const useMath = () => {
  const { token } = useContext(TokenContext)
  //   const { updateUserLevelData } = useContext(UserContext)

  async function getMath(operations: IOperations[]) {
    try {
      const response = await api.post('/math/getMath', operations, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function finnalyMath(request: IFinnallyMath[]) {
    try {
      const response = await api.post('/math/correct', request, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(response)
    } catch (error) {
      return error
    }
  }

  return {
    getMath,
    finnalyMath,
  }
}
