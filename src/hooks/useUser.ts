import { useContext } from 'react'
import { api } from '../lib/axios'
import { btoa } from 'react-native-quick-base64'
import { TokenContext } from '../contexts/TokenContext'
import { UserContext } from '../contexts/UserDataContext'
import { convertData } from '../utils/ConvertData'
import { RequestsContext } from '../contexts/RequestsContext'
import { IEditProfileDTO, IUserRegisterDTO } from '../dtos/UserDTO'

export const useUser = () => {
  const { addToken, token } = useContext(TokenContext)
  const { onLoadRequests } = useContext(RequestsContext)
  const { saveUserData } = useContext(UserContext)

  async function register(userRegister: IUserRegisterDTO) {
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
    } catch (error) {
      throw error
    }
  }

  async function editProfile(newUser: IEditProfileDTO) {
    try {
      const userRequest = {
        ...newUser,
        dateOfBirth: newUser.dateOfBirth
          ? convertData(newUser.dateOfBirth)
          : newUser.dateOfBirth,
      }

      const response = await api.put('/edit-profile', userRequest, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      saveUserData(response.data)
    } catch (error) {
      return error
    }
  }

  async function login(email: string, password: string) {
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
      throw error
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
      throw error
    }
  }

  async function searchUser(search: string) {
    try {
      const response = await api.get(`/user/searchUsers/${search}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function unfriend(idUser: number) {
    try {
      const response = await api.delete(`/user/unfriend/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) onLoadRequests()
    } catch (error) {
      return error
    }
  }

  async function getGlobalRanking() {
    try {
      const response = await api.get('/user/globalRanking', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  async function getFriendsRanking() {
    try {
      const response = await api.get('/user/friendsRanking', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  return {
    register,
    login,
    myUser,
    editProfile,
    searchUser,
    unfriend,
    getGlobalRanking,
    getFriendsRanking,
  }
}
