import { useState } from 'react'
import api from '../../api/axiosDefaults'
import styles from '../../styles/SignInForm.module.css'
import { Link } from 'react-router-dom'

export default function SignUpForm() {
  // Store form inputs
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic client-side check
    if (password1 !== password2) {
      setError('Passwords do not match')
      return
    }

    try {
      // Send signup request to backend
      const response = await api.post('/dj-rest-auth/registration/', {
        username,
        email,
        password1,
        password2,
      })

      // Handle successful signup (auto-login or show message)
      console.log('User created:', response.data)
      setSuccess(true)
      setError('')
    } catch (err) {
      console.error('Signup error:', err.response?.data)
      setError('Signup failed. Please check your input.')
    }
  }

  return (
    <div className={styles['signin-container']} >
      <div className={styles['signin-form-outer']}>
        <form onSubmit={handleSubmit} className={styles['signin-form']}>
          <h2>Sign Up</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <p className={styles.note}>
            Email address is just for password reset and is 
            not required to create an account.
          </p>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />

          <button type="submit">Register</button>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">Account created! You can now sign in.</p>}
          
          <p className={styles.altlink}>Already have an account?
            <Link to="/signin"> Sign-in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
