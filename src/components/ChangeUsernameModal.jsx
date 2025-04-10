import { useState } from 'react'
import api from '../api/axiosDefaults'
import { useAuth } from '../context/AuthContext'

const ChangeUsernameModal = ({ onClose, setSuccess, setError }) => {
    const { setUser } = useAuth()
    const [newUsername, setNewUsername] = useState('')
  
    const handleChange = async () => {
      try {
        // 1. Send PATCH request to update username
        await api.patch('/dj-rest-auth/user/', { username: newUsername })
  
        // 2. Refetch updated user data
        const res = await api.get('/dj-rest-auth/user/')
        setUser(res.data)
  
        // 3. Close modal and show success message
        setSuccess('Username updated successfully.')
        setError('')
        onClose()
      } catch (err) {
        console.error('Username update error:', err.response?.data || err.message)
        setError('Failed to update username.')
      }
    }
  
    return (
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
            <button onClick={handleChange}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default ChangeUsernameModal