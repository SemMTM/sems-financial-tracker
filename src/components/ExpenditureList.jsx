import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axiosDefaults'
import ExpenditureForm from './ExpenditureForm'
import Modal from '../components/Modal'
import EditExpenditureForm from '../components/EditExpenditureForm'

export default function ExpenditureList() {
  const { user } = useAuth()
  const [expenditures, setExpenditures] = useState([])
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  // Fetch expenditures from the backend
  const fetchExpenditures = async () => {
    try {
      const res = await api.get('/expenditures/')
      setExpenditures(res.data)
    } catch (err) {
      setError('Failed to load expenditures')
    }
  }

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this expenditure?')
    if (!confirmed) return
  
    try {
      await api.delete(`/expenditures/${id}/`)
      fetchExpenditures() // refresh list after delete
    } catch (err) {
      console.error('Failed to delete expenditure:', err)
    }
  }

  // 3. Handle add new expenditure
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

  // 4. Handle edit s
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
    <div className="expenditure-list">
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
              <span className="list-item-section list-title"></span>
            </div>
            {expenditures.map((item) => (
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
                  list-item-section-3">
                  {item.type}
                </span>

                <span className="list-item-section">
                  {item.readable_date}
                </span>
                <span className="list-item-section btns-container">
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
