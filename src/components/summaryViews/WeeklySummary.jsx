import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import { useFinancialData } from '../../context/FinancialDataContext'
import styles from '../../styles/WeeklySummary.module.css'


export default function WeeklySummary() {
  const { user } = useAuth()
  const [weeklySummary, setSummary] = useState([])
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
        <button>Monthly</button>
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
            <tr>
              <td>1</td>
              <td>+£200</td>
              <td>-£433</td>
              <td>+£155</td>
            </tr>
            <tr>
              <td>2</td>
              <td>+£200</td>
              <td>-£45</td>
              <td>+£155</td>
            </tr>
            <tr>
              <td>3</td>
              <td>+£200</td>
              <td>-£45</td>
              <td>+£155</td>
            </tr>
            <tr>
              <td>4</td>
              <td>+£200</td>
              <td>-£45</td>
              <td>+£155</td>
            </tr>
            <tr>
              <td>5</td>
              <td>+£200</td>
              <td>-£45</td>
              <td>+£155</td>
            </tr>
          </tbody>
        </table>


        {/*
        <div className={styles['week-table-h-sec']}>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>Expenditure</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>Income</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>Summary</span>
              </div>
          </div>
        </div>

        <div className={styles['week-table-h-sec']}>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>-£2443334  4434ddssdddsddddeww00</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span >+£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>£200</span>
              </div>
          </div>
        </div>

        <div className={styles['week-table-h-sec']}>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>-£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span >+£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>£200</span>
              </div>
          </div>
        </div>

        <div className={styles['week-table-h-sec']}>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>-£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span >+£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>£200</span>
              </div>
          </div>
        </div>

        <div className={styles['week-table-h-sec']}>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>-£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span >+£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>£200</span>
              </div>
          </div>
        </div>

        <div className={styles['week-table-h-sec']}>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>-£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span >+£200</span>
              </div>
          </div>
          <div className={styles['week-table-v-sec']}>
              <div className="flex">
                  <span>£200</span>
              </div>
          </div>
        </div>
        */}
      </div>
      
    </div>
  )
}
