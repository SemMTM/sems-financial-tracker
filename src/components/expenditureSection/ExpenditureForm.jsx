import { useCallback, useState } from 'react'
import api from '../../api/axiosDefaults'
import { useCalendar } from '../../context/CalendarContext';

export default function ExpenditureForm({ onAdd }) {
  const { selectedDate } = useCalendar();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('')
  const [date, setDate] = useState(
    selectedDate.toLocaleDateString('en-CA')
  );
  const [type, setType] = useState('BILL');
  const [repeated, setRepeated] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formatAmount = parseFloat(amount).toFixed(2);
    try {
      await api.post('/expenditures/', {
        title,
        amount: formatAmount,
        date,
        type,
        repeated: repeated || 'NEVER',
      });
      onAdd();
      setTitle('');
      setAmount('');
      setDate('');
      setType('BILL');
      setRepeated('NEVER');
    } catch (err) {
      setError('Failed to add expenditure:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [title, amount, date, type, repeated, onAdd]);

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Add New Expenditure</h3>
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
        Type
      </span>
      <div className="form-input-con">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="BILL">Bill</option>
        <option value="SAVING">Savings</option>
        <option value="INVESTMENT">Investment</option>
      </select>
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
        type="submit">Add Expenditure
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  )
}
