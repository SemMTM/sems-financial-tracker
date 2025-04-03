import axios from 'axios'

// Create a base Axios instance with your API URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access') // Get token
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // Attach token to request
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default api
