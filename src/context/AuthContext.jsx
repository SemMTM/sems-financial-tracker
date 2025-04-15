import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'
import useRefreshToken from '../hooks/useRefreshToken'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  useRefreshToken()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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

  // 2. Login using credentials — cookie is returned by backend
  const login = async (username, password) => {
    await api.post('/dj-rest-auth/login/', { username, password })
    const res = await api.get('/dj-rest-auth/user/')
    setUser(res.data)
  }

  // 3. Logout — backend clears the cookie
  const logout = async () => {
    await api.post('/dj-rest-auth/logout/')
    setUser(null)
  }

  if (isLoading && location.pathname !== '/signin') {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)