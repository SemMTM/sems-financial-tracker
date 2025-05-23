import { useState } from 'react'
import api from '../../api/axiosDefaults'
import styles from '../../styles/SignInForm.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function SignUpForm() {
  // Store form inputs
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [backendErrors, setBackendErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setBackendErrors([]);
    setSuccess(false);

    // Basic client-side check
    if (password1 !== password2) {
      setBackEndErrors(['Passwords do not match']);
      return
    }

    try {
      // Send signup request to backend
      const payload = {
        username,
        password1,
        password2,
      };

      if (email && email.trim() !== '') {
        payload.email = email.trim();
      }

      console.log('Final payload:', payload);

      await api.post('/dj-rest-auth/registration/', payload);

      setSuccess(true);
      setBackendErrors([]);

      await login(username, password1);
      navigate('/');

    } catch (err) {
      const data = err.response?.data || {}
      const collectedErrors = []
      console.log('Signup error:', err.response?.data || err.message);
      console.log('Payload:', { username, password1, password2 });

      if (data.username) collectedErrors.push(...data.username);
      if (data.email) collectedErrors.push(...data.email);
      if (data.password1) collectedErrors.push(...data.password1);
      if (data.password2) collectedErrors.push(...data.password2);
      if (data.non_field_errors) collectedErrors.push(...data.non_field_errors);

      setBackendErrors(collectedErrors.length ? collectedErrors : ['Signup failed. Please check your input.']);
      setSuccess(false);
    }
    setIsSubmitting(false);
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

          <div className="form-input-con">
            {/* Password Rules */}
            <ul>
              <li>At least 8 characters</li>
              <li>Not too common or predictable</li>
              <li>Not entirely numeric</li>
              <li>Must match both password fields</li>
            </ul>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>

          {/* Backend Validation Errors */}
          <div aria-live="polite">
            {backendErrors.length > 0 && (
              <div className="error">
                <ul>
                  {backendErrors.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}
            {success && <p className="success">Account created! You can now sign in.</p>}
          </div>
          
          <p className={styles.altlink}>Already have an account?
            <Link to="/signin"> Sign-in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
