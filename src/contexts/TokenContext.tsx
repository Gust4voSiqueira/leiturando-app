import AsyncStorage from '@react-native-async-storage/async-storage'
import { ReactNode, createContext, useState } from 'react'

interface TokenContextType {
  token: string
  addToken: (newToken: string) => void
  removeToken: () => void
  getToken: () => Promise<string>
}

export const TokenContext = createContext({} as TokenContextType)

interface TokenContextProviderProps {
  children: ReactNode
}

export function TokenContextProvider({ children }: TokenContextProviderProps) {
  const [token, setToken] = useState<string>(getToken())

  async function addToken(newToken: string) {
    try {
      await AsyncStorage.setItem('@leiturando:token', newToken)
      setToken(newToken)
    } catch (error) {
      console.log(error)
    }
  }

  async function removeToken() {
    await AsyncStorage.removeItem('@leiturando:token')
    setToken('')
  }

  async function getToken() {
    try {
      const response = await AsyncStorage.getItem('@leiturando:token')
      setToken(response)

      return token
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TokenContext.Provider value={{ token, addToken, removeToken, getToken }}>
      {children}
    </TokenContext.Provider>
  )
}
