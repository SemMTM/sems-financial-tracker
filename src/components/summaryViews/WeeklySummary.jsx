import { useEffect, useState, useMemo } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import { useFinancialData } from '../../context/FinancialDataContext'
import styles from '../../styles/WeeklySummary.module.css'
import getMonthWeeklyRanges from '../../utils/getFixedWeeklyRanges'


export default function WeeklySummary({ setViewMode }) {
  const { user } = useAuth()
  const { dataVersion } = useFinancialData();
  const [weeklySummary, setWeeklySummary] = useState({ weeks: [] })
  const [loading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const weeklyRanges = useMemo(() => getMonthWeeklyRanges(today), [today]);

  // Fetch incomes from the backend
  const fetchSummary = async () => {
    if (!user) return
    setError('')
    try {
      const res = await api.get('/weekly-summary/')
      setWeeklySummary(res.data)
    } catch (err) {
      console.error('Failed to fetch incomes:', err)
      setError('Failed to load incomes.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSummary()
  }, [user, dataVersion])

  if (!user) return <p>Please log in to view summaries.</p>
  if (error) return <p>{error}</p>
  if (loading) {
    return <div className='spinner'></div>
  }

  return (
    <div className="summary-sec-inner">
      <div className="summary-title-sec">
        <h3 className="summary-title">Weekly Summary</h3>
        <button onClick={() => setViewMode('monthly')}>Change to monthly</button>
      </div>

      <div className={styles['week-summary-table']}>
        <table>
          <thead>
            <tr>
              <th scope="col">Week</th>
              <th scope="col">Income</th>
              <th scope="col">Expenditure</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
          {[0, 1, 2, 3, 4].map((i) => {
            const week = weeklySummary.weeks[i];
            const range = weeklyRanges[i];
            return (
              <tr key={i}>
                <td>
                {range
                  ? `${today.toLocaleString('en-GB', { month: 'short' })} ${range.start} - ${range.end}`
                  : `Week ${i + 1}`}
                </td>
                <td className="income-summary">+{week?.income || 'N/A'}</td>
                <td className="expenditure-summary">-{week?.cost || 'N/A'}</td>
                <td className={week?.summary?.includes('-') ? 'expenditure-summary' : 'income-summary'
                  } 
                >
                  {week?.summary || 'N/A'}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}
