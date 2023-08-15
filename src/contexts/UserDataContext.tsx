import React, { ReactNode, createContext, useState } from 'react'

import { charactersImages } from '../utils/charactersImages'

interface IUserRequest {
  image: string
  name: string
  level: number
  breakthrough: number
  createdAt: Date
  matches: number
  correct: number
  wrong: number
}
interface IUser {
  image: React.JSX.Element
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
  saveUserData: (newUserData: IUserRequest) => void
  removeUserData: () => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserDate] = useState<IUser>()

  function saveUserData(newUserData: IUserRequest) {
    const characterImage = charactersImages(65, 65).find(
      (character) => character.name === newUserData.image,
    ).image

    const user = {
      ...newUserData,
      image: characterImage,
    }

    setUserDate(user)
  }

  function removeUserData() {
    setUserDate(null)
  }

  return (
    <UserContext.Provider value={{ userData, saveUserData, removeUserData }}>
      {children}
    </UserContext.Provider>
  )
}
