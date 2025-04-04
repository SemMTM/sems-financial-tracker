import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/SignInForm.module.css'

export default function SignInForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  // Grab the login function from context
  const { login } = useAuth()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent page reload on submit
    try {
      await login(username, password) // Attempt login
      setError('') // Clear errors on success
      navigate('/')
    } catch (err) {
      setError('Invalid username or password') // Show error
    }
  }

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2>Sign In</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}
