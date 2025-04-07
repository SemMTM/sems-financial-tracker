import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // 1. Try to fetch current user on load (uses cookies automatically)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/dj-rest-auth/user/')
        setUser(res.data)
      } catch (err) {
        console.log('User not authenticated')
        setUser(null)
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

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)