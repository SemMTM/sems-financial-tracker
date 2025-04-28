import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import styles from '../../styles/SignInForm.module.css'

export default function SignInForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth()

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(username, password) // Attempt login
      setError('') // Clear errors on success
      navigate('/')
    } catch {
      setError('Invalid username or password') // Show error
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles['signin-container']}>
      <div className={styles['signin-form-outer']}>
        <form onSubmit={handleSubmit} className={styles['signin-form']}>
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

          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {error && <p className="error">{error}</p>}
        </form>

        <Link to="/passwordreset">
          <button className={styles['forgot-pass-btn']}>
              Forgot password?
          </button>
        </Link>

        <p className={styles.altlink}>Don't have an account? 
          <Link to="/signup"> Sign-up</Link>
        </p>
      </div>
    </div>
  )
}
