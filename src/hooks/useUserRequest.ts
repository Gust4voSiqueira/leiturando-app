import { api } from '../lib/axios'

interface ILogin {
  email: String
  password: String
}

interface IUserRegister {
  characterName: String
  name: String
  email: String
  password: String
  confirmPassword: String
}

export const useUserRequest = () => {
  async function register({
    name,
    email,
    characterName,
    password,
    confirmPassword,
  }: IUserRegister) {
    try {
      const response = await api.post('/user/register', {
        characterName,
        name,
        email,
        password,
        confirmPassword,
      })

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  async function login({ email, password }: ILogin) {
    try {
      const bodyFormData = new FormData()
      bodyFormData.append('email', email as string)
      bodyFormData.append('password', password as string)

      const credentials = btoa('client' + ':' + 123)
      const basicAuth = 'Basic ' + credentials

      console.log(credentials)

      console.log(bodyFormData)

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

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register,
    login,
  }
}
