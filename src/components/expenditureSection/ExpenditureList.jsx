import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import ExpenditureForm from './ExpenditureForm'
import Modal from '../Modal'
import EditExpenditureForm from './EditExpenditureForm'
import { useFinancialData } from '../../context/FinancialDataContext'

export default function ExpenditureList() {
  const { user } = useAuth()
  const [expenditures, setExpenditures] = useState([])
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const { notifyChange } = useFinancialData();

  // Fetch expenditures from the backend
  const fetchExpenditures = async () => {
    try {
      const res = await api.get('/expenditures/')
      setExpenditures(res.data)
      notifyChange()
    } catch (err) {
      setError('Failed to load expenditures')
    }
  }

  // Handle add new expenditure
  const handleAdd = () => {
    setModalContent(
      <ExpenditureForm
        onAdd={() => {
          fetchExpenditures()
          setShowModal(false)
        }}
      />
    )
    setShowModal(true)
  }

  // Handle edit s
  const handleEdit = (item) => {
    setModalContent(
      <EditExpenditureForm
        item={item}
        onClose={() => setShowModal(false)}
        onUpdate={fetchExpenditures}
      />
    )
    setShowModal(true)
  }

  // Load expenditures on mount or when user is set
  useEffect(() => {
    if (user) fetchExpenditures()
  }, [user])

  if (!user) return <p>Please log in to view expenditures.</p>
  if (error) return <p>{error}</p>

  return (
    <div className="list-section">
      <h3>Monthly Expenditures</h3>

      {expenditures.length === 0 ? (
        <p>No expenditures for this month.</p>
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
                Type
              </span>
              <span className="list-item-section list-title">
                Date
              </span>
            </div>
            {expenditures.map((item) => (
              <li key={item.id} className="list-item expenditure-item">

                <span 
                  className="list-item-section">
                  {item.title}
                  </span>

                <span className="list-item-section
                  list-item-section-2">
                  -{item.formatted_amount}
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
        + Add a new expenditure
      </button>
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  )
}
