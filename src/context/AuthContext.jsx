import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosDefaults'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // 1. Store tokens in localStorage + apply to Axios
  const setTokens = (access, refresh) => {
    localStorage.setItem('accessToken', access)
    localStorage.setItem('refreshToken', refresh)
    api.defaults.headers.common['Authorization'] = `Bearer ${access}`
  }

  // 2. Clear all token state
  const clearTokens = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    delete api.defaults.headers.common['Authorization']
  }

  // 3. Login and store tokens
  const login = async (username, password) => {
    const res = await api.post('/api/token/', { username, password })
    const { access, refresh } = res.data
    setTokens(access, refresh)
    const userRes = await api.get('/dj-rest-auth/user/')
    setUser(userRes.data)
  }

  // 4. Logout user and reset state
  const logout = async () => {
    clearTokens()
    setUser(null)
    navigate('/signin');
  }

  // 5. Try to refresh access token
  const refreshAccessToken = async () => {
    try {
      const refresh = localStorage.getItem('refreshToken')
      const res = await api.post('/api/token/refresh/', { refresh })
      const { access } = res.data
      setTokens(access, refresh)
      return access
    } catch (err) {
      console.warn('Token refresh failed, logging out')
      logout()
      return null
    }
  }

  // 6. On load, restore session using valid access or refresh
  useEffect(() => {
    const loadUser = async () => {
      const access = localStorage.getItem('accessToken')
      const refresh = localStorage.getItem('refreshToken')

      if (!refresh) {
        setIsLoading(false)
        return
      }

      try {
        let finalAccess = access

        // Case 1: Access exists and is still valid
        if (access) {
          const { exp } = jwtDecode(access)
          const now = Math.floor(Date.now() / 1000)
          if (exp > now) {
            api.defaults.headers.common['Authorization'] = `Bearer ${access}`
          } else {
            // Access expired — try refreshing
            finalAccess = await refreshAccessToken()
          }
        } else {
          // No access token — try to refresh anyway
          finalAccess = await refreshAccessToken()
        }

        // Now try to fetch the user if we have a valid token
        if (finalAccess) {
          const res = await api.get('/dj-rest-auth/user/')
          setUser(res.data)
        } else {
          setUser(null)
        }
      } catch (err) {
        console.warn('Failed to restore user from token:', err)
        clearTokens()
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  if (isLoading && location.pathname !== '/signin') {
    return <div className="spinner"></div>
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
