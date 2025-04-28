import { useState, useEffect } from 'react';
import api from '../../api/axiosDefaults';
import { useAuth } from '../../context/AuthContext'

const ChangeEmailModal = ({ onClose, setSuccess }) => {
  const { user, setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === user.email) {
      setError('New email is the same as the current email.')
      return
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      // 1. Send PATCH request to update email
      const response = await api.put('/change-email', { email: email });
      setUser(response.data)
      setSuccess('Email successfully changed!');
      onClose();
    } catch (err) {
      setError('Failed to change email. Please try again.');
      console.error(err)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <form onSubmit={handleSubmit}>
          <h3>Change Email</h3>

          <div className="form-input-con">
            {user.email ? (
              <p>Current Email Address:<br></br>
                <strong>{user.email}</strong></p>
            ) : (
              <p>No email address associated with this account.</p>
            )}
          </div>
          
          <div className="form-input-con">
            <label htmlFor="email" className="hidden">New Email Address</label>
            <input
              type="email"
              placeholder="New email address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ChangeEmailModal;
