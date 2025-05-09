import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true,
})

// Automatically refresh the token if access is expired
api.interceptors.response.use( // Registers a response interceptor.
  response => response, // If the response is successful, just pass it through unchanged.
  async error => {
    const originalRequest = error.config // If there's an error, extract the original request config

    // Check if token expired and not already retried
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true // Flags this request so if it fails again, we don’t retry it a second time.
      try {
        // Attempt to refresh token
        await api.post('/dj-rest-auth/token/refresh/')
        // Retry original request
        return api(originalRequest)
      } catch (refreshError) {
        console.warn('Refresh token failed:', refreshError)
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default api
