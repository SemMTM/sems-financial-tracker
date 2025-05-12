import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import styles from '../../styles/MonthlySummary.module.css'
import { useFinancialData } from '../../context/FinancialDataContext'
import { useCalendar } from '../../context/CalendarContext'
import { cleanFormattedAmount } from '../../utils/cleanAmount';


export default function MonthlySummary({ setViewMode }) {
  const { user } = useAuth()
  const [monthlySummary, setMonthlySummary] = useState([])
  const [loading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const { dataVersion } = useFinancialData();
  const { selectedDate, getSelectedMonthParam } = useCalendar()

  const fetchSummary = async () => {
    if (!user) return
    setError('')
    try {
      const res = await api.get(
        `/monthly-summary/?month=${getSelectedMonthParam()}`)
      setMonthlySummary(res.data)
    } catch (err) {
      console.error('Failed to fetch monthly summary:', err)
      setError('Failed to load monthly summary.')
    } finally {
      setIsLoading(false)
    }
  }

  // Load summary on mount or when user is set
  useEffect(() => {
     fetchSummary()
  }, [user, dataVersion, selectedDate])

  if (!user) return <p>Please log in to view summary.</p>
  if (error) return <p>{error}</p>
  if (loading) {
    return <div className='spinner'></div>
  }

  return (
    <div className="summary-sec-inner">
      <div className="summary-title-sec">
        <h3 className="summary-title">Monthly Summary</h3>
        <button onClick={() => setViewMode('weekly')}>Change to weekly</button>
      </div>

      <div className={styles['monthly-summary-sec-inner']}>
        <ul className={styles['month-sum-list']}>
          <li className="list-item sum-li-item">
            <span>Monthly Income</span>
            <span className="income-summary">
              +{cleanFormattedAmount(monthlySummary.formatted_income)}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Bills</span>
            <span className="expenditure-summary">
              -{cleanFormattedAmount(monthlySummary.formatted_bills)}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Saving</span>
            <span className="expenditure-summary">
              -{cleanFormattedAmount(monthlySummary.formatted_saving)}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Investment</span> 
            <span className="expenditure-summary">
              -{cleanFormattedAmount(monthlySummary.formatted_investment)}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <span>Disposable income spending</span> 
            <span className="expenditure-summary">
              -{cleanFormattedAmount(monthlySummary.formatted_disposable_spending)}
            </span>
          </li>

          <li className="list-item sum-li-item">
            <strong><span>Summary</span></strong> 

            {monthlySummary?.formatted_total && (
              <span
                className={
                  monthlySummary.formatted_total.includes('-')
                    ? 'expenditure-summary'
                    : 'income-summary'
                }
              >
                {monthlySummary.formatted_total.includes('-')
                  ? monthlySummary.formatted_total
                  : `+${cleanFormattedAmount(monthlySummary.formatted_total)}`}
              </span>
            )}

          </li>
        </ul>

        <div className={styles['disp-sec-sum']}>
            <div>
              <div>Disposable Income Budget</div> 
              <div className="">
                {cleanFormattedAmount(monthlySummary.formatted_budget)}
              </div>
            </div>

            <div>
              <div>Remaining Disposable Income</div> 

              {monthlySummary?.formatted_remaining_disposable && (
              <div
                className={
                  monthlySummary.formatted_remaining_disposable.includes('-')
                    ? 'expenditure-summary'
                    : ''
                }
              >
                {monthlySummary.formatted_remaining_disposable.includes('-')
                  ? cleanFormattedAmount(monthlySummary.formatted_remaining_disposable)
                  : `${cleanFormattedAmount(monthlySummary.formatted_remaining_disposable)}`}
              </div>
              )}
            
            </div>
          </div>
      </div>
    </div>
  )
}
