import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access') // Looks for the JWT access token stored in the browser from login.
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // If a token is found, it adds an Authorization header to the request.
    }
    return config // Returns the updated request config so Axios can send it.
  },
  (error) => Promise.reject(error) // If something goes wrong while preparing the request, Axios will reject it properly.
)

export default api