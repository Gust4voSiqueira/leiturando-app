import { useContext } from 'react'
import { api } from '../lib/axios'
import { btoa } from 'react-native-quick-base64'
import { TokenContext } from '../contexts/TokenContext'
import { IImage } from '../ui/screens/Register'

interface ILogin {
  email: String
  password: String
}

interface IUserRegister {
  characterName?: string
  name: string
  email: string
  password: string
  confirmPassword: string
  file?: IImage
}

export const useUserRequest = () => {
  const { addToken, token } = useContext(TokenContext)

  async function register(userRequest: IUserRegister) {
    try {
      const formData = new FormData()

      if (userRequest.file) {
        const file = await convertImagePickerAssetToFile(userRequest.file)
        formData.append('file', file)
      }

      if (userRequest.characterName) {
        formData.append('characterName', userRequest.characterName)
      }

      formData.append('name', userRequest.name)
      formData.append('email', userRequest.email)
      formData.append('password', userRequest.password)
      formData.append('confirmPassword', userRequest.confirmPassword)

      const response = await api.post('/user/register', formData)

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  async function login({ email, password }: ILogin) {
    try {
      const credentials = btoa('client' + ':' + 123)
      const basicAuth = 'Basic ' + credentials

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
      return 'Error'
    }
  }

  async function myUser() {
    try {
      console.log(token)

      const response = await api.get('/user-auth', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      console.log('falhou')

      console.log(error)
    }
  }

  async function getRequests() {
    try {
      const response = await api.get('/request/getRequests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const convertImagePickerAssetToFile = async (asset) => {
    const response = await fetch(asset.sourceString)
    const blob = await response.blob()
    return new File([blob], 'file.jpg', { type: 'image/jpeg' })
  }

  return {
    register,
    login,
    myUser,
    getRequests,
  }
}
