import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'

// 1. Create the AuthContext
const AuthContext = createContext()

// 2. Provide the context to the app
export const AuthProvider = ({ children }) => {
  // 3. Load tokens from localStorage on first render
  const [accessToken, setAccessToken] = useState(() => localStorage.getItem('accessToken'))
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem('refreshToken'))
  const [user, setUser] = useState(null)

  // 4. Persist tokens to localStorage when they change
  useEffect(() => {
    accessToken
      ? localStorage.setItem('accessToken', accessToken)
      : localStorage.removeItem('accessToken')

    refreshToken
      ? localStorage.setItem('refreshToken', refreshToken)
      : localStorage.removeItem('refreshToken')
  }, [accessToken, refreshToken])

  // 5. Attach Authorization header + auto-refresh if token is expired
  useEffect(() => {
    const attachAccessToken = (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    }

    const handleTokenRefresh = async (error) => {
      const originalRequest = error.config

      // 5.1 If unauthorized and not yet retried, attempt refresh
      if (error.response?.status === 401 && !originalRequest._retry && refreshToken) {
        originalRequest._retry = true
        try {
          // 5.2 Attempt token refresh
          const { data } = await api.post('/dj-rest-auth/token/refresh/', {
            refresh: refreshToken,
          })

          // 5.3 Update access token in state and localStorage
          setAccessToken(data.access)
          localStorage.setItem('accessToken', data.access)

          // 5.4 Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${data.access}`
          return api(originalRequest)
        } catch (err) {
          // 5.5 If refresh fails, log the user out
          logout()
        }
      }

      return Promise.reject(error)
    }

    // 5.6 Register request and response interceptors
    const reqInterceptor = api.interceptors.request.use(attachAccessToken)
    const resInterceptor = api.interceptors.response.use((res) => res, handleTokenRefresh)

    // 5.7 Clean up interceptors on unmount
    return () => {
      api.interceptors.request.eject(reqInterceptor)
      api.interceptors.response.eject(resInterceptor)
    }
  }, [accessToken, refreshToken])

  // 6. Fetch user info on first mount (if access token is available)
  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return
      try {
        const res = await api.get('/dj-rest-auth/user/', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        setUser(res.data)
      } catch (err) {
        console.log('Auto-login failed:', err)
        logout()
      }
    }

    fetchUser()
  }, [])

  // 7. Login with username + password
  const login = async (username, password) => {
    // 7.1 Request tokens
    const { data } = await api.post('/dj-rest-auth/login/', { username, password })
    setAccessToken(data.access)
    setRefreshToken(data.refresh)

    // 7.2 Fetch user info
    const userRes = await api.get('/dj-rest-auth/user/', {
      headers: { Authorization: `Bearer ${data.access}` },
    })
    setUser(userRes.data)
  }

  // 8. Log out the user and clear auth state
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

  // 9. Provide auth context to children
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        accessToken,
        refreshToken,
        setUser,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)