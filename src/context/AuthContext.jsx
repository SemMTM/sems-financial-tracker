import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // Load tokens from localStorage on mount
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken'))
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem('refreshToken'))
  const [user, setUser] = useState(null)

  // Login with credentials
  const login = async (username, password) => {
    const res = await api.post('/dj-rest-auth/login/', { username, password })

    // Save tokens to state (and localStorage via effect)
    setAccessToken(res.data.access)
    setRefreshToken(res.data.refresh)

    const userRes = await api.get('/dj-rest-auth/user/', {
      headers: { Authorization: `Bearer ${res.data.access}` },
    })
    setUser(userRes.data)
  }

  // Logout and clear everything
  const logout = async () => {
    try {
      await api.post('/dj-rest-auth/logout/', null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    } catch (err) {
      console.log('Logout error:', err)
    }
    setAccessToken(null)
    setRefreshToken(null)
    setUser(null)
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  // Store tokens in localStorage on change
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    } else {
      localStorage.removeItem('accessToken')
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken)
    } else {
      localStorage.removeItem('refreshToken')
    }
  }, [accessToken, refreshToken])

  // Attach token to every request and refresh if expired
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
            localStorage.setItem('accessToken', refreshRes.data.access)
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

  // Check if logged in on first mount
  useEffect(() => {
    const fetchUser = async () => {
      if (accessToken) {
        try {
          const res = await api.get('/dj-rest-auth/user/', {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          setUser(res.data)
        } catch (err) {
          console.log('User restore failed:', err)
          logout()
        }
      }
    }

    fetchUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
