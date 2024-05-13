import axios from 'axios'
import { AppError } from '../utils/AppError'

const api = axios.create({
  baseURL: 'http://35.198.13.28:8080',
  // baseURL: 'http://localhost:8080',
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
