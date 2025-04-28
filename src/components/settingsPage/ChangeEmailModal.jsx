import { useState, useEffect } from 'react';
import api from '../../api/axiosDefaults';
import { useAuth } from '../../context/AuthContext'

const ChangeEmailModal = ({ onClose, setSuccess }) => {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const res = await api.put('/dj-rest-auth/user/', { email });
      setSuccess('Email successfully changed!');
      onClose();
    } catch (err) {
      setError('Failed to change email. Please try again.');
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
              <p>Current Email Address: {user.email}</p>
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
