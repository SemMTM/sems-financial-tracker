import { useState } from 'react'
import api from '../../api/axiosDefaults'

export default function ChangePasswordModal({ onClose, setSuccess, setError }) {
  const [newPassword1, setNewPassword1] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  const [backendErrors, setBackendErrors] = useState([]);

  const handlePasswordChange = async () => {
    try {
      await api.post('/dj-rest-auth/password/change/', {
        new_password1: newPassword1,
        new_password2: newPassword2,
      })

      setSuccess('Password changed successfully.')
      setError('')
      setBackendErrors([]);
      onClose()
    } catch (err) {
      const data = err.response?.data || {};
      const combinedErrors = [];

      if (data.new_password1) combinedErrors.push(...data.new_password1);
      if (data.new_password2) combinedErrors.push(...data.new_password2);
      if (data.non_field_errors) combinedErrors.push(...data.non_field_errors);

      setBackendErrors(combinedErrors);
      setError('Failed to change password.');
      setSuccess('');
    }
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Change Password</h3>

        <div className="form-input-con">
          <input
            type="password"
            placeholder="New password"
            value={newPassword1}
            onChange={(e) => setNewPassword1(e.target.value)}
          />
        </div>

        <div className="form-input-con">
          <input
            type="password"
            placeholder="Confirm new password"
            value={newPassword2}
            onChange={(e) => setNewPassword2(e.target.value)}
          />
        </div>

        <div className="form-input-con">
          {/* Password Rules */}
          <ul>
            <li>At least 8 characters</li>
            <li>Not too common or predictable</li>
            <li>Not entirely numeric</li>
            <li>Must match both password fields</li>
          </ul>
        </div>

        {/* Backend validation errors */}
        {backendErrors.length > 0 && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            <ul>
              {backendErrors.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="form-input-con">
          <button onClick={handlePasswordChange}>Save</button>
          <button 
            onClick={onClose} 
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
