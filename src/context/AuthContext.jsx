import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axiosDefaults'

// Create a new context object
const AuthContext = createContext()

// Create a context provider component to wrap around your app
export const AuthProvider = ({ children }) => {
  // Store the logged-in user's info in state
  const [user, setUser] = useState(null)

  // Function to log in the user with username and password
  const login = async (username, password) => {
    // Send a POST request to the login endpoint with credentials
    const res = await api.post('/dj-rest-auth/login/', {
      username,
      password,
    })

    // Destructure access token and user data from the response
    const { access, user } = res.data
    // Save the access token in localStorage to persist login
    localStorage.setItem('access', access)
    // Store the user object in state so the UI can access it
    setUser(user)
  }

  // Function to log out the user
  const logout = async () => {
    try {
      // Make a POST request to logout (optional with JWT, but clean)
      await api.post('/dj-rest-auth/logout/')
    } catch (err) {
      // If the logout request fails, log the error (safe to ignore)
      console.warn('Logout error:', err)
    }

    // Remove the JWT from localStorage to log the user out
    localStorage.removeItem('access')
    // Clear the user from local state
    setUser(null)
  }

  // Check if there's a valid token and fetch the logged-in user's data
  const checkLoggedIn = async () => {
    // Get the saved token from localStorage
    const token = localStorage.getItem('access')

    // If no token, skip
    if (!token) return

    try {
      // Fetch the current logged-in user's data using the token
      const res = await api.get('/dj-rest-auth/user/')
      // If valid, store user in state
      setUser(res.data)
    } catch {
      // If the token is invalid/expired, log out the user
      logout()
    }
  }

  // Run this once when the app first loads
  useEffect(() => {
    checkLoggedIn()
  }, [])
  // Provide the user data and auth functions to the entire app
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to access the auth context easily
export const useAuth = () => useContext(AuthContext)