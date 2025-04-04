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
          {expenditures.map((item) => (
            <li key={item.id} className="expenditure-item">
              <div>
                <strong>{item.title}</strong> ({item.type})
              </div>
              <div>{item.formatted_amount}</div>
              <div>{item.readable_date}</div>
              {item.repeated && (
                <div>Repeats: {item.repeated_display}</div>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Form to add new expenditures */}
      <ExpenditureForm onAdd={fetchExpenditures} />
    </div>
  )
}
