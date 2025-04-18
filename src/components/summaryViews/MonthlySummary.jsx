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
    <div className="summary-sec-inner">
      <div className="summary-title-sec">
        <h3 className="summary-title">Monthly Summary</h3>
        <button>Weekly</button>
      </div>

      <div className="">
        <ul>
          <li><span>Monthly Income</span>
            <span className="income-summary">
              + {monthlySummary.formatted_income}</span></li>
          <li><span>Bills</span>
            <span className="expenditure-summary">
              - {monthlySummary.formatted_bills}</span></li>
          <li><span>Saving</span>
            <span className="expenditure-summary">
              - {monthlySummary.formatted_saving}</span></li>
          <li><span>Investment</span> 
            <span className="expenditure-summary">
              - {monthlySummary.formatted_investment}</span></li>
        </ul>
      </div>
    </div>
  )
}
