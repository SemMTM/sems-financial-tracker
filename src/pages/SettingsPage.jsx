import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axiosDefaults'

const SettingsPage = () => {
  const { user, logout, setUser, refreshToken, setAccessToken } = useAuth()
  const [showPopup, setShowPopup] = useState(false)
  const [newUsername, setNewUsername] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleUsernameChange = async () => {
    try {
      // 1. Update the username
      await api.patch('/dj-rest-auth/user/', { username: newUsername })
  
      // 2. Refresh the access token
      const refreshResponse = await api.post('/dj-rest-auth/token/refresh/', {
        refresh: refreshToken,
      })
      const newAccessToken = refreshResponse.data.access
      setAccessToken(newAccessToken)
  
      // 3. Refetch user with new token
      const userRes = await api.get('/dj-rest-auth/user/', {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      })
      setUser(userRes.data)
  
      // 4. Update UI
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
      navigate('/') // redirect to homepage or /signin
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