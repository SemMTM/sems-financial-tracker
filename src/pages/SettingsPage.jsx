import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axiosDefaults'
import { useNavigate } from 'react-router-dom'

const SettingsPage = () => {
  const { user, logout, setUser } = useAuth()
  const [showPopup, setShowPopup] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = async () => {
    try {
      // 1. Update the username (cookie auth handles session)
      await api.patch('/dj-rest-auth/user/', { username: newUsername })

      // 2. Refetch updated user info
      const userRes = await api.get('/dj-rest-auth/user/')
      setUser(userRes.data)

      // 3. Success feedback
      setSuccess('Username updated successfully.')
      setError('')
      setShowPopup(false)
    } catch (err) {
      console.error('Username update error:', err.response?.data || err.message)
      setError('Failed to update username.')
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/') // Redirect after logout
    } catch (err) {
      console.log('Logout failed:', err)
    }
  }

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <p><strong>Current username:</strong> {user?.username}</p>

      <button onClick={() => setShowPopup(true)}>Change Username</button>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Log Out
      </button>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Change Username</h3>
            <input
              type="text"
              placeholder="New username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <div>
              <button onClick={handleUsernameChange}>Save</button>
              <button onClick={() => setShowPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SettingsPage
