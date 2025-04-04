import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(null)

  const login = async (username, password) => {
    const res = await api.post('/dj-rest-auth/login/', { username, password })
    setAccessToken(res.data.access)
    setRefreshToken(res.data.refresh)
    const userRes = await api.get('/dj-rest-auth/user/', {
      headers: { Authorization: `Bearer ${res.data.access}` },
    })
    setUser(userRes.data)
  }

  const logout = async () => {
    try {
      await api.post('/dj-rest-auth/logout/', null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    } catch (err) {
      console.log('Logout error:', err)
    }
    setUser(null)
    setAccessToken(null)
    setRefreshToken(null)
  }

  // Auto-attach access token to every request
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config
        if (
          error.response?.status === 401 &&
          !originalRequest._retry &&
          refreshToken
        ) {
          originalRequest._retry = true
          try {
            const refreshRes = await api.post('/dj-rest-auth/token/refresh/', {
              refresh: refreshToken,
            })
            setAccessToken(refreshRes.data.access)
            originalRequest.headers.Authorization = `Bearer ${refreshRes.data.access}`
            return api(originalRequest)
          } catch (refreshErr) {
            logout()
          }
        }
        return Promise.reject(error)
      }
    )

    return () => {
      api.interceptors.request.eject(requestInterceptor)
      api.interceptors.response.eject(responseInterceptor)
    }
  }, [accessToken, refreshToken])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
