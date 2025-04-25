import { useState } from "react";
import api from "../../api/axiosDefaults";
import { useFinancialData } from '../../context/FinancialDataContext'

export default function EditExpenditureForm(
  { item, onClose, onUpdate}) {
  const [title, setTitle] = useState(item.title);
  const [amount, setAmount] = useState(
    item.formatted_amount.replace(/[^0-9.]/g, "")
  );
  const [type, setType] = useState(item.type);
  const [date, setDate] = useState(item.date.slice(0, 10));
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { notifyChange } = useFinancialData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      await api.put(`/expenditures/${item.id}/`, {
        title,
        amount,
        type,
        date,
      });
      onUpdate(); // Refresh list
      notifyChange()
      onClose(); // Close modal
    } catch (err) {
      setError("Failed to update expenditure.");
    } finally {
      setIsSubmitting(false)
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this expenditure?')
    if (!confirmed) return
    setIsSubmitting(true)
    try {
      await api.delete(`/expenditures/${item.id}/`)
      onUpdate()
      notifyChange()
      onClose()
    } catch (err) {
      setError('Failed to delete expenditure.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Edit Expenditure: {item.title}</h3>
      
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
          required
          min="0"
          step="0.01"
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

      <button type="submit" disabled={isSubmitting}>Save Changes</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
      <button
        type="button"
        onClick={handleDelete}
        style={{ marginLeft: '10px' }}
        className="delete-btn"
        disabled={isSubmitting}
      >
        Delete
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
