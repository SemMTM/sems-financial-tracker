import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import styles from '../../styles/MonthlySummary.module.css'


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

      <div className={styles['monthly-summary-sec-inner']}>
        <ul className={styles['month-sum-list']}>
          <li className="list-item">
            <span>Monthly Income</span>
            <span className="income-summary">
              + {monthlySummary.formatted_income}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Bills</span>
            <span className="expenditure-summary">
              - {monthlySummary.formatted_bills}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Saving</span>
            <span className="expenditure-summary">
              - {monthlySummary.formatted_saving}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Investment</span> 
            <span className="expenditure-summary">
              - {monthlySummary.formatted_investment}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <strong><span>Total</span></strong> 
            <span className="expenditure-summary">
              - {monthlySummary.formatted_total}
            </span>
          </li>

          <div >
            <div>
              <div>Disposable Income Budget</div> 
              <div className="">
                {monthlySummary.formatted_budget}
              </div>
            </div>

            <div>
              <div>Remaining Disposable Income</div> 
              <div className="">
                {monthlySummary.formatted_remaining_disposable}
              </div>
            </div>
          </div>

        </ul>
      </div>
    </div>
  )
}
