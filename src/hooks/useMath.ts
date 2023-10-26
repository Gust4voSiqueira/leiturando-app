import { useContext } from 'react'
import { api } from '../lib/axios'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserDataContext'
import { IResponses } from '../ui/screens/Math/Game'
import { IOperations } from '../dtos/MathDTO'

const operationMapping = {
  ADDITION: 'ADDITION',
  SUBTRACTION: 'SUBTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  DIVISION: 'DIVISION',
}

export const useMath = () => {
  const { token } = useContext(TokenContext)
  const { updateUserLevelData } = useContext(UserContext)

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

  async function finnalyMath(request: IResponses) {
    try {
      const newRequest = []
      for (const key in request) {
        const response = request[key]
        const newResponse = {
          number1: response.number1,
          number2: response.number2,
          response: parseInt(response.response),
          operation: operationMapping[response.operation],
        }

        newRequest.push(newResponse)
      }

      const response = await api.post('/math/correct', newRequest, {
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
    getMath,
    finnalyMath,
  }
}
