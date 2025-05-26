import { useCallback, useState } from 'react'
import api from '../../api/axiosDefaults'
import { useCalendar } from '../../context/CalendarContext';

export default function DisSpendForm({ onAdd }) {
  const { selectedDate } = useCalendar();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState(
    selectedDate.toLocaleDateString('en-CA')
  );

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formatAmount = parseFloat(amount).toFixed(2);
    
    try {
      await api.post('/disposable-spending/', {
        title,
        amount: formatAmount,
        date,
      })
      onAdd();
      setTitle('');
      setAmount('');
      setDate('');
    } catch (err) {
      setError('Failed to add spending:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [title, amount, date, onAdd]);

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
        type="submit">Add Spending
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
