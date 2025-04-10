import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ChangePasswordModal from '../components/ChangePasswordModal'
import ChangeUsernameModal from '../components/ChangeUsernameModal'
import CurrencySelector from '../components/CurrencySelector'

const SettingsPage = () => {
  const { user, logout } = useAuth()
  const [showUsernamePopup, setShowUsernamePopup] = useState(false)
  const [showPasswordPopup, setShowPasswordPopup] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showCurrencyModal, setShowCurrencyModal] = useState(false)
  const navigate = useNavigate()


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

      {success && <p style={{ color: 'green' }}>{success}</p>}

      <div>
        <p><strong>Current username:</strong> {user?.username}</p>

        <button onClick={() => setShowUsernamePopup(true)}>Change Username</button>
        {showUsernamePopup && (
          <ChangeUsernameModal
            onClose={() => setShowUsernamePopup(false)}
            setSuccess={setSuccess}
            setError={setError}
          />
        )}
      </div>

      <div>
        <button onClick={() => setShowPasswordPopup(true)}>Change Password</button>
        {showPasswordPopup && (
          <ChangePasswordModal
            onClose={() => setShowPasswordPopup(false)}
            setSuccess={setSuccess}
            setError={setError}
          />
        )}
      </div>

      <div>
        <button onClick={() => setShowCurrencyModal(true)}>Change Currency</button>
        {showCurrencyModal && (
          <CurrencySelector
            onClose={() => setShowCurrencyModal(false)}
            setSuccess={setSuccess}
            setError={setError}
          />
        )}
      </div>

      <div>
        <button
          onClick={handleLogout}
        >Log Out
        </button>
      </div>
    </div>
  )
}

export default SettingsPage
