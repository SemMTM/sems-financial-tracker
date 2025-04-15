import { useState } from 'react'
import api from '../../api/axiosDefaults'

export default function DisSpendForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formatAmount = parseFloat(amount).toFixed(2)
    try {
      await api.post('/disposable-spending/', {
        title,
        amount: formatAmount,
        date,
      })
      onAdd()
      setTitle('')
      setAmount('')
      setDate('')
    } catch (err) {
      console.error('Failed to add spending:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Add New Spending</h3>
      <span className="input-title">
        Title
      </span>
      <div className="form-input-con">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <span className="input-title">
        Amount
      </span>
      <div className="form-input-con">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          required
        />
      </div>

      <span className="input-title">
        Date
      </span>
      <div className="form-input-con">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <button className="add-button" 
        disabled={isSubmitting}
        type="submit">Add Spending</button>
    </form>
  )
}
