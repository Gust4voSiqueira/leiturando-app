import { ReactNode, createContext, useState } from 'react'
import { Characters } from '../ui/components/ModalCharacters/characters'

interface IUser {
  image: string
  name: string
  level: number
  breakthrough: number
  createdAt: Date
  matches: number
  correct: number
  wrong: number
}

interface UserContextType {
  userData: IUser
  saveUserData: (newUserData: IUser) => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserDate] = useState<IUser>()

  function saveUserData(newUserData: IUser) {
    const image = Characters.find(
      (character) => character.name === newUserData.image,
    ).image

    const user = {
      ...newUserData,
      image,
    }

    setUserDate(user)
  }

  return (
    <UserContext.Provider value={{ userData, saveUserData }}>
      {children}
    </UserContext.Provider>
  )
}
