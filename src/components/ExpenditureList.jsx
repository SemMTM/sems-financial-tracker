import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axiosDefaults'
import ExpenditureForm from './ExpenditureForm'

export default function ExpenditureList() {
  const { user } = useAuth()
  const [expenditures, setExpenditures] = useState([])
  const [error, setError] = useState('')

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

  // Load expenditures on mount or when user is set
  useEffect(() => {
    if (user) fetchExpenditures()
  }, [user])

  if (!user) return <p>Please log in to view expenditures.</p>
  if (error) return <p>{error}</p>

  return (
    <div className="expenditure-list">
      <h2>Monthly Expenditures</h2>

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
              <li key={item.id} className="list-item">
                <span 
                  className="list-item-section">
                  {item.title}
                  </span>
                <span className="list-item-section
                  list-item-section-2">
                  {item.formatted_amount}
                  </span>
                <span 
                  className="list-item-section
                  list-item-section-3">
                  {item.type}
                </span>
                <span className="list-item-section">
                  {item.readable_date}
                  </span>
                <span className="btns-section">
                  <button>Edit</button>
                </span>
              </li>
            ))}
          </div>
        </ul>
      )}

      {/* Form to add new expenditures */}
      <ExpenditureForm onAdd={fetchExpenditures} />
    </div>
  )
}
