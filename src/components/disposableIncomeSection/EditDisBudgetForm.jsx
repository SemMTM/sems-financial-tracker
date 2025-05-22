import { useCallback, useState } from "react";
import api from "../../api/axiosDefaults";

export default function EditDisBudgetForm(
  { item, onClose, onUpdate}) {
  const [amount, setAmount] = useState(
    item.formatted_amount.replace(/[^0-9.]/g, "")
  );
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      await api.put(`/disposable-budget/${item.id}/`, {
        amount,
      });
      onUpdate();
      onClose(); 
    } catch (err) {
      setError("Failed to update budget.");
    } finally {
      setIsSubmitting(false)
    }
  }, [amount, item.id, onUpdate, onClose]);

  return (
    <form onSubmit={handleSubmit} className="expenditure-form">
      <h3>Edit Budget: {item.title}</h3>

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

      <button type="submit" disabled={isSubmitting}>Save Changes</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
