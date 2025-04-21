import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import { useFinancialData } from '../../context/FinancialDataContext'
import styles from '../../styles/WeeklySummary.module.css'


export default function WeeklySummary({ setViewMode }) {
  const { user } = useAuth()
  const [weeklySummary, setSummary] = useState({ weeks: [] })
  const { dataVersion } = useFinancialData();
  const [error, setError] = useState('')

  // Fetch incomes from the backend
  const fetchSummary = async () => {
    try {
      const res = await api.get('/weekly-summary/')
      setSummary(res.data)
    } catch (err) {
      setError('Failed to load weekly summary')
    }
  }

  useEffect(() => {
    if (user) fetchSummary()
  }, [dataVersion])

  if (!user) return <p>Please log in to view summaries.</p>
  if (error) return <p>{error}</p>

  return (
    <div className="summary-sec-inner">
      <div className="summary-title-sec">
        <h3 className="summary-title">Weekly Summary</h3>
        <button onClick={() => setViewMode('monthly')}>Monthly</button>
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
            return (
              <tr key={i}>
                <td>{i + 1}</td>
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
