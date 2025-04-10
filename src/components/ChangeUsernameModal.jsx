import { useState } from 'react'
import api from '../api/axiosDefaults'
import { useAuth } from '../context/AuthContext'

const ChangeUsernameModal = ({ onClose, setSuccess, setError }) => {
    const { setUser } = useAuth()
    const [newUsername, setNewUsername] = useState('')
    const [validationError, setValidationError] = useState('')
  
    // Validation rules
    const isValidUsername = (username) => {
        const pattern = /^[a-zA-Z0-9_-]+$/
        return (
        username &&
        username.length <= 40 &&
        pattern.test(username)
        )
    }

    const handleChange = async () => {
        // 1. Validate before sending request
        if (!newUsername.trim()) {
            setValidationError('Username cannot be blank.')
            return
        }
        if (!isValidUsername(newUsername)) {
            setValidationError(
            'Username must only contain letters, numbers, dashes (-), or underscores (_) and be at most 40 characters.'
            )
            return
        }

        try {
            // 1. Send PATCH request to update username
            await api.patch('/dj-rest-auth/user/', { username: newUsername })
    
            // 2. Refetch updated user data
            const res = await api.get('/dj-rest-auth/user/')
            setUser(res.data)
    
            // 3. Close modal and show success message
            setSuccess('Username updated successfully.')
            setError('')
            setValidationError('')
            onClose()
        } catch (err) {
            const msg = err.response?.data?.username?.[0] ||
            'Failed to update username.'
            setError(msg)
            setValidationError('')
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

            {validationError && (
            <p style={{ color: 'red' }}>{validationError}</p>
            )}

            <div>
                <button onClick={handleChange}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
            </div>
        </div>
        )
    }
  
  export default ChangeUsernameModal