import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axiosDefaults'

export default function ExpenditureList() {
  const { user } = useAuth()
  const [expenditures, setExpenditures] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchExpenditures = async () => {
      try {
        const res = await api.get('/expenditures/')
        setExpenditures(res.data)
      } catch (err) {
        setError('Failed to load expenditures')
      }
    }

    if (user) fetchExpenditures()
  }, [user])

  if (!user) return <p>Please log in to view expenditures.</p>
  if (error) return <p>{error}</p>
  if (expenditures.length === 0) return <p>No expenditures for this month.</p>

  return (
    <div className="expenditure-list">
      <h2>Your Expenditures</h2>
      <ul>
        {expenditures.map((item) => (
          <li key={item.id} className="expenditure-item">
          <div><strong>{item.title}</strong> ({item.type})</div>
          <div>{item.formatted_amount}</div>
          <div>{item.readable_date}</div>
          {item.repeated && <div>Repeats: {item.repeated_display}</div>}
        </li>
        ))}
      </ul>
    </div>
  )
}