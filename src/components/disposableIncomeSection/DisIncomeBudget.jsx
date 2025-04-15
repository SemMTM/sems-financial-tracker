import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import Modal from '../Modal'
import EditDisBudgetForm from './EditDisBudgetForm'
import styles from '../../styles/DisIncomeBudget.module.css'

export default function DisIncomeBudget({ spendingChanged }) {
  const { user } = useAuth()
  const [disBudget, setDisBudget] = useState([])
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  // Fetch incomes from the backend
  const fetchDisBudget = async () => {
    try {
      const res = await api.get('/disposable-budget/')
      setDisBudget(res.data)
    } catch (err) {
      setError('Failed to load budget')
    }
  }
  
    // 4. Handle edit s
      const handleEdit = (item) => {
        setModalContent(
          <EditDisBudgetForm
            item={item}
            onClose={() => setShowModal(false)}
            onUpdate={fetchDisBudget}
          />
        )
        setShowModal(true)
      }

  // Load incomes on mount or when user is set
  useEffect(() => {
    if (user) fetchDisBudget()
  }, [user, spendingChanged])

  if (!user) return <p>Please log in to view budget.</p>
  if (error) return <p>{error}</p>

  return (
    <div className="list-section">
      <h3>Disposable Income Budget</h3>

      {disBudget.length === 0 ? (
        <p>No disposable spending for this month.</p>
      ) : (
        <ul>
          <div>
            {disBudget.map((item) => (
              <li key={item.id} className="list-item">

                <span className="list-item-section"
                  style={{ 
                    fontSize: "18px",
                    paddingRight: "10px"
                   }}
                >
                  {item.formatted_amount}
                </span>

                <span className="btns-container">
                  <button className="edit-btn"
                    onClick={() => handleEdit(item)}
                    >Edit</button>
                </span>

                <span className={styles.remaining}
                > Remaining: {item.remaining_formatted}
                </span>
              </li>
            ))}
          </div>
        </ul>
      )}
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  )
}
