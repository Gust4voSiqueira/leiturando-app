export interface IUserRegisterDTO {
  characterName: string
  name: string
  email: string
  dateOfBirth: string
  password: string
  confirmPassword: string
}

export interface IUserDataDTO {
  breakthrough: number
  image: React.ReactNode
  level: number
  name: string
}

export interface IEditProfileDTO {
  characterName?: string
  name?: string
  email?: string
  dateOfBirth?: string
}

export type CharactersDTO =
  | 'batman'
  | 'robin'
  | 'superman'
  | 'wonderMan'
  | 'thor'
  | 'spiderMan'
  | 'joker'
  | 'harry'
  | 'wolverine'
