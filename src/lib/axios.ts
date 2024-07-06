import axios from 'axios'
import { AppError } from '../utils/AppError'

const api = axios.create({
  baseURL: 'http://35.215.255.232:8080',
  timeout: 10000, // 5 segundos
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
