import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import ChangePasswordModal from '../components/settingsPage/ChangePasswordModal'
import ChangeUsernameModal from '../components/settingsPage/ChangeUsernameModal'
import CurrencySelector from '../components/settingsPage/CurrencySelector'
import ChangeEmailModal from '../components/settingsPage/ChangeEmailModal'
import Modal from '../components/Modal'
import styles from '../styles/SettingsDropdown.module.css'


export default function SettingsDropdown() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  // 1. Local state for dropdown + modal content
  const [showDropdown, setShowDropdown] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const dropdownRef = useRef()

  // 2. Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 3. Open modal with a given component
  const openModal = (Component) => {
    setModalContent(
      <Component
        onClose={() => setShowModal(false)}
        setSuccess={setSuccess}
        setError={setError}
      />
    )
    setShowModal(true)
    setShowDropdown(false)
  }

  // 4. Handle logout
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (err) {
      console.log('Logout failed:', err)
    }
  }

  return (
    <div className={styles['settings-wrapper']} ref={dropdownRef}>
      <button onClick={() => setShowDropdown((prev) => !prev)}>
        ⚙️
      </button>
  
      {/* 6. Dropdown Panel */}
      {showDropdown && (
        <div className={styles['settings-dropdown']}>
          <h2>Settings</h2>
  
          {success && <p className={styles['success-msg']}>{success}</p>}
          {error && <p className={styles['error-msg']}>{error}</p>}
  
          <div>
            <button className={styles['settings-btn']}
              onClick={() => openModal(ChangeUsernameModal)}>
              Change Username
            </button>
          </div>

          <div>
          <button className={styles['settings-btn']}
              onClick={() => openModal(ChangeEmailModal)}>
              Change Email Address
            </button>
          </div>
  
          <div>
            <button className={styles['settings-btn']}
              onClick={() => openModal(ChangePasswordModal)}>
              Change Password
            </button>
          </div>
  
          <div>
            <button className={styles['settings-btn']}
              onClick={() => openModal(CurrencySelector)}>
              Change Currency
            </button>
          </div>
  
          <div>
            <button
              onClick={handleLogout}
              className={`${styles['logout-btn']} ${styles['settings-btn']}`}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
  
      {/* 7. Shared Modal */}
      {showModal && (
        <Modal isOpen={true} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}
    </div>
  )
}
