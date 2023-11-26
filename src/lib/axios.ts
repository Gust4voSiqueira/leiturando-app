import axios from 'axios'
import { AppError } from '../utils/AppError'

const api = axios.create({
  baseURL: 'http://18.229.159.209:8080',
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data))
    } else {
      return Promise.reject(error)
    }
  },
)

export { api }
