import { useCallback, useState } from "react";
import api from "../../api/axiosDefaults";

export default function EditIncomeForm(
  { item, onClose, onUpdate}) {
  const [title, setTitle] = useState(item.title);
  const [amount, setAmount] = useState(
    item.formatted_amount.replace(/[^0-9.]/g, "")
  );
  const [date, setDate] = useState(
    new Date(item.date).toLocaleDateString('en-CA')
  );
  const [error, setError] = useState("");

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await api.put(`/income/${item.id}/`, {
        title,
        amount,
        date,
      });
      onUpdate();
      onClose();
    } catch (err) {
      setError("Failed to update income.");
    }
  }, [title, amount, date, item.id, onUpdate, onClose]);

  const handleDelete = useCallback(async () => {
    const confirmed = window.confirm('Are you sure you want to delete this income?');
    if (!confirmed) return
    try {
      await api.delete(`/income/${item.id}/`);
      onUpdate();
      onClose();
    } catch (err) {
      setError('Failed to delete income:', err);
    }
  }, [item.id, onUpdate, onClose]);

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
          onChange={(e) => setTitle(e.target.value.trimStart())}
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
          min="0.01"
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
