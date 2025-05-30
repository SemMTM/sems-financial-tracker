import { useCallback, useState } from 'react'
import api from '../../api/axiosDefaults'
import { useCalendar } from '../../context/CalendarContext';

export default function IncomeForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const { selectedDate } = useCalendar();
  const [date, setDate] = useState(
    selectedDate.toLocaleDateString('en-CA')
  );
  const [error, setError] = useState('');
  const [repeated, setRepeated] = useState('NEVER');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formatAmount = parseFloat(amount).toFixed(2);
    try {
      await api.post('/income/', {
        title,
        amount: formatAmount,
        date,
        repeated: repeated || 'NEVER',
      })
      onAdd();
    } catch (err) {
      setError('Failed to add income:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [amount, title, date, repeated, onAdd]);

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Add New Income</h3>
      <span className="input-title">
        Title
      </span>
      <div className="form-input-con">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value.trimStart())}
          required
          maxLength={50}
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
          min="0.01"
          required
          max="1000000"
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

      <span className="input-title">
        Repeat
      </span>
      <div className="form-input-con">
        <select value={repeated} onChange={(e) => setRepeated(e.target.value)}>
          <option value="NEVER">No Repeat</option>
          <option value="WEEKLY">Weekly</option>
          <option value="MONTHLY">Monthly</option>
        </select>
      </div>

      <button className="add-button" 
        disabled={isSubmitting}
        type="submit">Add Income
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
