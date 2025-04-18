import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import Modal from '../Modal'


export default function IncomeList() {
  const { user } = useAuth()
  const [monthlySummary, setSummary] = useState([])
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  // Fetch incomes from the backend
  const fetchSummary = async () => {
    try {
      const res = await api.get('/monthly-summary/')
      setSummary(res.data)
    } catch (err) {
      setError('Failed to load monthly summary')
    }
  }

  // Load incomes on mount or when user is set
  useEffect(() => {
    if (user) fetchSummary()
  }, [user])

  if (!user) return <p>Please log in to view incomes.</p>
  if (error) return <p>{error}</p>

  return (
    <div className="list-section">
      <h3>Monthly Summary</h3>

      <ul>
        <div>
          <li>{monthlySummary.income}</li>
          <li>{monthlySummary.bills}</li>
          <li>{monthlySummary.saving}</li>
          <li>{monthlySummary.investment}</li>
        </div>
      </ul>
    </div>
  )
}
