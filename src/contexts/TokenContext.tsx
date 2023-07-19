import { ReactNode, createContext, useState } from 'react'

interface TokenContextType {
  token: String
  addToken: (newToken: String) => void
  removeToken: () => void
}

export const TokenContext = createContext({} as TokenContextType)

interface TokenContextProviderProps {
  children: ReactNode
}

export function TokenContextProvider({ children }: TokenContextProviderProps) {
  const [token, setToken] = useState<String>('')

  function addToken(newToken: String) {
    setToken(newToken)
  }

  function removeToken() {
    setToken('')
  }

  return (
    <TokenContext.Provider value={{ token, addToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  )
}
