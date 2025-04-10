import { useState } from 'react'
import api from '../api/axiosDefaults'

export default function EditExpenditureForm({ item, onClose, onUpdate }) {
  const [title, setTitle] = useState(item.title)
  const [amount, setAmount] = useState((item.formatted_amount.replace(/[^0-9.]/g, '')))
  const [type, setType] = useState(item.type)
  const [date, setDate] = useState(item.date.slice(0, 10)) // ISO date
  const [repeated, setRepeated] = useState(item.repeated || '')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.put(`/expenditures/${item.id}/`, {
        title,
        amount,
        type,
        date,
        repeated: repeated || null,
      })
      onUpdate() // Refresh list
      onClose()  // Close modal
    } catch (err) {
      setError('Failed to update expenditure.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Edit Expenditure: {item.title}</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount in pounds"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        min="0"
        step="0.01"
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="BILL">Bill</option>
        <option value="EXPENSE">Expense</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <select value={repeated} onChange={(e) => setRepeated(e.target.value)}>
        <option value="NEVER">No Repeat</option>
        <option value="DAILY">Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY">Monthly</option>
      </select>

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}
