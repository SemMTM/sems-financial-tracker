import { useState } from 'react'
import api from '../api/axiosDefaults'

export default function ExpenditureForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('BILL')
  const [repeated, setRepeated] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formatAmount = parseFloat(amount).toFixed(2)
    console.log({
        title,
        amount,
        date,
        type,
        repeated: repeated || null,
      })
    try {
      await api.post('/expenditures/', {
        title,
        amount: formatAmount,
        date,
        type,
        repeated: repeated || 'NEVER', // Optional field
      })
      onAdd() // Trigger parent to refresh list
      // Clear form
      setTitle('')
      setAmount('')
      setDate('')
      setType('BILL')
      setRepeated('NEVER')
    } catch (err) {
      console.error('Failed to add expenditure:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Add New Expenditure</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount in pounds (e.g. 50.00)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        step="0.01"
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="BILL">Bill</option>
        <option value="SUBSCRIPTION">Subscription</option>
        <option value="OTHER">Other</option>
      </select>

      <select value={repeated} onChange={(e) => setRepeated(e.target.value)}>
        <option value="NEVER">No Repeat</option>
        <option value="DAILY">Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY">Monthly</option>
      </select>

      <button type="submit">Add Expenditure</button>
    </form>
  )
}
