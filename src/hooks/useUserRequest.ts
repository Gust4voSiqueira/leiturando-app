import { useContext } from 'react'
import { api } from '../lib/axios'
import { btoa } from 'react-native-quick-base64'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserDataContext'
import { convertData } from '../utils/convertData'

interface ILogin {
  email: String
  password: String
}

interface IUserRegister {
  characterName?: string
  name: string
  email: string
  dateOfBirth: string
  password: string
  confirmPassword: string
}

interface IEditProfile {
  characterName?: string
  name?: string
  email?: string
  dateOfBirth?: string
  password: string
}

export const useUserRequest = () => {
  const { removeToken, addToken, token } = useContext(TokenContext)
  const { saveUserData } = useContext(UserContext)

  async function register(userRegister: IUserRegister) {
    try {
      const userRequest = {
        ...userRegister,
        dateOfBirth: convertData(userRegister.dateOfBirth),
      }

      const response = await api.post('/user/register', userRequest, {
        headers: {
          'Content-type': 'application/json',
        },
      })

      return response.data
    } catch (err) {
      return err
    }
  }

  async function login({ email, password }: ILogin) {
    try {
      const credentials = btoa('client' + ':' + 123)
      const basicAuth = 'Basic ' + credentials

      console.log({ email, password })

      const response = await api.post(
        '/oauth/token',
        {
          grant_type: 'password',
          username: email,
          password,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: basicAuth,
          },
        },
      )

      addToken(response.data?.access_token)

      return response
    } catch (error) {
      return error
    }
  }

  async function myUser() {
    try {
      const response = await api.get('/user-auth', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      saveUserData(response.data)
      return response.data
    } catch (error) {
      console.log(error)

      removeToken()
      return error
    }
  }

  async function editProfile(newUser: IEditProfile) {
    try {
      const response = await api.put('/edit-profile', newUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(response.data)
    } catch (error) {
      return error
    }
  }

  return {
    register,
    login,
    myUser,
    editProfile,
  }
}
