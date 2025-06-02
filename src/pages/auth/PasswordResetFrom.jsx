import React, { useState } from 'react';
import api from '../../api/axiosDefaults';
import styles from '../../styles/SignInForm.module.css'
import { Link } from 'react-router-dom'

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post('/dj-rest-auth/password/reset/', { email });
      setMessage('Check your email for the password reset link.');
      setErrorMessage('');
    } catch {
      setErrorMessage('Failed to send password reset email.');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles['signin-container']}>
      <div className={styles['signin-form-outer']}>
        <form onSubmit={handleSubmit} className={styles['signin-form']}>
          <h3>Reset Password</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>

          <div aria-live="polite">
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </form>

        <p className={styles.altlink}>
          Back to <Link to="/signin"> Sign-in</Link>
        </p>

      </div> 
    </div>
  );
};

export default ResetPasswordForm;