import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axiosDefaults'

// Create a context to hold user authentication data
const AuthContext = createContext()

// Provide the context to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Store the logged-in user

  // Log in the user by posting to dj-rest-auth login
  const login = async (username, password) => {
    await api.post('/dj-rest-auth/login/', { username, password }) // Send credentials
    const res = await api.get('/dj-rest-auth/user/') // Fetch user after login
    setUser(res.data) // Store user in state
  }

  // Log out the user by calling dj-rest-auth logout
  const logout = async () => {
    await api.post('/dj-rest-auth/logout/') // Log out on the backend
    setUser(null) // Clear user state
  }

  // Check if the user is already logged in (on mount)
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const res = await api.get('/dj-rest-auth/user/') // Try to fetch the current user
        setUser(res.data) // If successful, set user
      } catch (err) {
        setUser(null) // If not, clear user
      }
    }

    checkLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Export a hook for accessing auth context in components
export const useAuth = () => useContext(AuthContext)