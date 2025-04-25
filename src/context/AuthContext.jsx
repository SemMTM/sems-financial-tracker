import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'
// import useRefreshToken from '../hooks/useRefreshToken'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // 1. Store tokens in localStorage
  const setTokens = (access, refresh) => {
    localStorage.setItem('accessToken', access)
    localStorage.setItem('refreshToken', refresh)
    api.defaults.headers.common['Authorization'] = `Bearer ${access}`
  }

  // 2. Remove tokens + auth header
  const clearTokens = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    delete api.defaults.headers.common['Authorization']
  }

  // 3. Login
  const login = async (username, password) => {
    const res = await api.post('/dj-rest-auth/login/', {
      username,
      password,
    })
    const { access, refresh } = res.data
    setTokens(access, refresh)
    const userRes = await api.get('/dj-rest-auth/user/')
    setUser(userRes.data)
  }

  // 4. Logout
  const logout = async () => {
    clearTokens()
    setUser(null)
  }

  // 5. Refresh token manually
  const refreshAccessToken = async () => {
    try {
      const refresh = localStorage.getItem('refreshToken')
      const res = await api.post('/dj-rest-auth/token/refresh/', { refresh })
      const { access } = res.data
      setTokens(access, refresh)
    } catch (err) {
      console.warn('Token refresh failed. Logging out...')
      logout()
    }
  }

  // 6. Check token validity on load
  useEffect(() => {
    const loadUser = async () => {
      const access = localStorage.getItem('accessToken')
      const refresh = localStorage.getItem('refreshToken')
      if (!access || !refresh) return setIsLoading(false)

      try {
        const { exp } = jwtDecode(access)
        const now = Math.floor(Date.now() / 1000)
        if (exp < now) {
          await refreshAccessToken()
        } else {
          api.defaults.headers.common['Authorization'] = `Bearer ${access}`
        }

        const res = await api.get('/dj-rest-auth/user/')
        setUser(res.data)
      } catch (err) {
        clearTokens()
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  if (isLoading && location.pathname !== '/signin') {
    return <div className='spinner'></div>
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

/* JWT Cookie based AuthContext
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // 2. Login using credentials — cookie is returned by backend
  const login = async (username, password) => {
    await api.post('/dj-rest-auth/login/', 
      { username, password },
      { withCredentials: true }
    )
    const res = await api.get('/dj-rest-auth/user/')
    setUser(res.data)
  }

  // 3. Logout — backend clears the cookie
  const logout = async () => {
    try {
      await api.post('/dj-rest-auth/logout/')
    } catch (err) {
      console.warn('Logout failed (possibly already expired)', err)
    } finally {
      setUser(null)
    }
  }

  useRefreshToken(logout)

  // 1. Try to fetch current user on load (uses cookies automatically)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/dj-rest-auth/user/')
        setUser(res.data)
      } catch {
        console.log('User not authenticated')
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (isLoading && location.pathname !== '/signin') {
    return <div className='spinner'></div>
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
*/