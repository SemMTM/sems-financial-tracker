import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import Modal from '../Modal'


export default function DisSpendList() {
  const { user } = useAuth()
  const [disSpend, setDisSpend] = useState([])
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  // Fetch incomes from the backend
  const fetchDisSpend = async () => {
    try {
      const res = await api.get('/disposable-spending/')
      setDisSpend(res.data)
    } catch (err) {
      setError('Failed to load incomes')
    }
  }

  // Handle add new expenditure
    const handleAdd = () => {
      setModalContent(
      
      )
      setShowModal(true)
    }
  
    // 4. Handle edit s
      const handleEdit = (item) => {
        setModalContent(
          
        )
        setShowModal(true)
      }

  // Load incomes on mount or when user is set
  useEffect(() => {
    if (user) fetchDisSpend()
  }, [user])

  if (!user) return <p>Please log in to view incomes.</p>
  if (error) return <p>{error}</p>

  return (
    <div className="list-section">
      <h3>Disposable Income Spending</h3>

      {disSpend.length === 0 ? (
        <p>No disposable spending for this month.</p>
      ) : (
        <ul>
          <div>
            <div className="list-titles-section">
              <span className="list-item-section list-title">
                Title
              </span>
              <span 
                className="
                  list-item-section 
                  list-title
                  list-item-section-2">
                Amount
              </span>
              <span 
                className="
                  list-item-section
                  list-title
                  list-item-section-3">
              </span>
              <span className="list-item-section list-title">
                Date
              </span>
            </div>
            {disSpend.map((item) => (
              <li key={item.id} className="list-item expenditure-item">

                <span 
                  className="list-item-section">
                  {item.title}
                  </span>

                <span className="list-item-section
                  list-item-section-2">
                  - {item.formatted_amount}
                  </span>

                <span 
                  className="list-item-section
                  list-item-section">
                  {item.type}
                </span>

                <span className="list-item-section list-item-section-4">
                {new Date(item.date).toLocaleDateString('en-GB', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })
                }
                </span>
                <span className="btns-container">
                  <button className="edit-btn"
                    onClick={() => handleEdit(item)}
                    >Edit</button>
                </span>

              </li>
            ))}
          </div>
        </ul>
      )}

      <button onClick={handleAdd} className="add-btn">
        + Add a new spending
      </button>
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  )
}
