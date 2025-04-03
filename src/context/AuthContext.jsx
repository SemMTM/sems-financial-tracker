import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axiosDefaults'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Only in state
  const navigate = useNavigate()

  // Handles login
  const login = async (username, password) => {
    const res = await api.post('/dj-rest-auth/login/', { username, password })
    const { access } = res.data
    localStorage.setItem('access', access) // Only token saved
    const userRes = await api.get('/dj-rest-auth/user/')
    setUser(userRes.data)
  }

  // Handles logout
  const logout = async () => {
    try {
      await api.post('/dj-rest-auth/logout/')
    } catch {}
    localStorage.removeItem('access')
    setUser(null)
    navigate('/signin') // Redirect to sign in
  }

  // Refresh token and get user info
  const refreshTokenAndFetchUser = async () => {
    try {
      const res = await axios.post('/dj-rest-auth/token/refresh/')
      localStorage.setItem('access', res.data.access)
      const userRes = await api.get('/dj-rest-auth/user/')
      setUser(userRes.data)
    } catch (err) {
      logout()
    }
  }

  // Check token + fetch user on load
  const checkLoggedIn = async () => {
    const token = localStorage.getItem('access')
    if (!token) return
    try {
      const userRes = await api.get('/dj-rest-auth/user/')
      setUser(userRes.data)
    } catch {
      await refreshTokenAndFetchUser()
    }
  }

  // Axios 401 response interceptor
  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          try {
            await refreshTokenAndFetchUser() // Try to refresh and retry
            return api(error.config) // Retry original request
          } catch {
            logout() // If refresh fails, logout
          }
        }
        return Promise.reject(error)
      }
    )
    return () => api.interceptors.response.eject(responseInterceptor)
  }, [])

  useEffect(() => {
    checkLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
