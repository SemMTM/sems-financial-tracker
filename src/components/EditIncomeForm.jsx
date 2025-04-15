import { useState } from "react";
import api from "../api/axiosDefaults";

export default function EditIncomeForm(
  { item, onClose, onUpdate}) {
  const [title, setTitle] = useState(item.title);
  const [amount, setAmount] = useState(
    item.formatted_amount.replace(/[^0-9.]/g, "")
  );
  const [date, setDate] = useState(item.date.slice(0, 10));
  const [repeated, setRepeated] = useState(item.repeated || "");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/income/${item.id}/`, {
        title,
        amount,
        date,
        repeated: repeated || null,
      });
      onUpdate();
      onClose();
    } catch (err) {
      setError("Failed to update income.");
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this income?')
    if (!confirmed) return
  
    try {
      await api.delete(`/income/${item.id}/`)
      onUpdate()
      onClose()
    } catch (err) {
      console.error('Failed to delete income:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Edit Income: {item.title}</h3>
      
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
        <option value="DAILY">Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY">Monthly</option>
      </select>
      </div>

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
      <button
        type="button"
        onClick={handleDelete}
        style={{ marginLeft: '10px' }}
        className="delete-btn"
      >
        Delete
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
