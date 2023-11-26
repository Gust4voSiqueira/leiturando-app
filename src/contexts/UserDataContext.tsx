import React, { ReactNode, createContext, useState } from 'react'

import { charactersImages } from '../utils/CharactersImages'

interface IUserRequest {
  image: string
  email: string
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
  email: string
  name: string
  level: number
  breakthrough: number
  createdAt: Date
  matches: number
  correct: number
  wrong: number
}

interface IUpdateUserLevelDataProps {
  level: number
  breakthrough: number
  matches: number
  correct: number
  wrong: number
}

interface UserContextType {
  userData: IUser
  saveUserData: (newUserData: IUserRequest) => void
  removeUserData: () => void
  updateUserLevelData: ({
    level,
    breakthrough,
    matches,
    correct,
    wrong,
  }: IUpdateUserLevelDataProps) => void
}

export const UserContext = createContext({} as UserContextType)

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userData, setUserData] = useState<IUser>()

  function saveUserData(newUserData: IUserRequest) {
    const characterImage = charactersImages(65, 65).find(
      (character) => character.name === newUserData.image,
    ).image

    const user = {
      ...newUserData,
      image: characterImage,
    }

    setUserData(user)
  }

  function removeUserData() {
    setUserData(null)
  }

  function updateUserLevelData({
    level,
    breakthrough,
    matches,
    correct,
    wrong,
  }: IUpdateUserLevelDataProps) {
    setUserData({
      ...userData,
      level,
      breakthrough,
      matches,
      correct,
      wrong,
    })
  }

  return (
    <UserContext.Provider
      value={{ userData, saveUserData, removeUserData, updateUserLevelData }}
    >
      {children}
    </UserContext.Provider>
  )
}
