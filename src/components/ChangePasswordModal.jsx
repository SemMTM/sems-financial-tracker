import { useState } from 'react'
import api from '../api/axiosDefaults'

export default function ChangePasswordModal({ onClose, setSuccess, setError }) {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword1, setNewPassword1] = useState('')
  const [newPassword2, setNewPassword2] = useState('')

  const handlePasswordChange = async () => {
    try {
      await api.post('/dj-rest-auth/password/change/', {
        old_password: currentPassword,
        new_password1,
        new_password2,
      })

      setSuccess('Password changed successfully.')
      setError('')
      onClose()
    } catch (err) {
      console.error('Password change error:', err.response?.data || err.message)
      setError('Failed to change password. Please check your inputs.')
    }
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword1}
          onChange={(e) => setNewPassword1(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
        />
        <div>
          <button onClick={handlePasswordChange}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
