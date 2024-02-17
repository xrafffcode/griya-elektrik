// eslint-disable-next-line regex/invalid
import axios from 'axios'

const token = localStorage.getItem('token')

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const axiosInstance = axios


