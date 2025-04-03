import { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axiosDefaults'

// Create a new context object
const AuthContext = createContext()

export const AuthProvider = ({ children }) => { // Create a context provider component to wrap around your app
  const [user, setUser] = useState(null) // Store the logged-in user's info in state

  const login = async (username, password) => { // Function to log in the user with username and password
    const res = await api.post('/dj-rest-auth/login/', { // Send a POST request to the login endpoint with credentials
      username,
      password,
    })

    const { access, user } = res.data // Destructure access token and user data from the response
    localStorage.setItem('access', access) // Save the access token in localStorage to persist login
    setUser(user) // Store the user object in state so the UI can access it
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

    localStorage.removeItem('access') // Remove the JWT from localStorage to log the user out
    setUser(null) // Clear the user from local state
  }

  const checkLoggedIn = async () => { // Check if there's a valid token and fetch the logged-in user's data
    const token = localStorage.getItem('access') // Get the saved token from localStorage
 
    if (!token) return // If no token, skip

    try {
      const res = await api.get('/dj-rest-auth/user/') // Fetch the current logged-in user's data using the token
      setUser(res.data) // If valid, store user in state
    } catch {
      logout()
    }
  }

  useEffect(() => {
    checkLoggedIn()
  }, [])
  return (
    <AuthContext.Provider value={{ user, login, logout }}> 
      {children}
    </AuthContext.Provider> // Provide the user data and auth functions to the entire app
  )
}

export const useAuth = () => useContext(AuthContext) // Custom hook to access the auth context easily