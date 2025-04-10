import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ChangePasswordModal from '../components/ChangePasswordModal'
import ChangeUsernameModal from '../components/ChangeUsernameModal'
import CurrencySelector from '../components/CurrencySelector'
import Modal from '../components/Modal'

const SettingsPage = () => {
  const { user, logout } = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showCurrencyModal, setShowCurrencyModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const navigate = useNavigate()


  // 1. Open Change Username Modal
  const openUsernameModal = () => {
    setModalContent(
      <ChangeUsernameModal
        onClose={() => setShowModal(false)}
        setSuccess={setSuccess}
        setError={setError}
      />
    )
    setShowModal(true)
  }

  // 2. Open Change Password Modal
  const openPasswordModal = () => {
    setModalContent(
      <ChangePasswordModal
        onClose={() => setShowModal(false)}
        setSuccess={setSuccess}
        setError={setError}
      />
    )
    setShowModal(true)
  }

  // 2. Open Change Password Modal
  const openCurrencyModal = () => {
    setModalContent(
      <CurrencySelector
        onClose={() => setShowModal(false)}
        setSuccess={setSuccess}
        setError={setError}
      />
    )
    setShowModal(true)
  }


  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
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

        <button onClick={openUsernameModal}>Change Username</button>
      </div>

      <div>
        <button onClick={openPasswordModal}>Change Password</button>
      </div>

      <div>
      <button onClick={openCurrencyModal}>Change Currency</button>
      </div>

      {/* Shared Modal */}
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}


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
