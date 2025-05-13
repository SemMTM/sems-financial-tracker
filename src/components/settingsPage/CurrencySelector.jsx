import { useEffect, useState } from 'react'
import api from '../../api/axiosDefaults'

const CurrencyModal = ({ onClose, setSuccess }) => {
  const [currency, setCurrency] = useState('')
  const [currencyId, setCurrencyId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const options = [
    ['USD', 'US Dollar $'],
    ['EUR', 'Euro €'],
    ['JPY', 'Japanese Yen ¥'],
    ['GBP', 'British Pound £'],
    ['AUD', 'Australian Dollar A$'],
    ['CAD', 'Canadian Dollar C$'],
    ['CHF', 'Swiss Franc CHF'],
    ['CNY', 'Chinese Yuan ¥'],
    ['HKD', 'Hong Kong Dollar HK$'],
    ['INR', 'Indian Rupee ₹'],
  ]

  // 1. Load the user's current currency
  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await api.get('/currency/')
        setCurrency(res.data.currency)
        setCurrencyId(res.data.id)
      } catch (err) {
        console.error('Failed to load currency:', err)
        setError('Could not load your currency setting.')
      }
    }

    fetchCurrency()
  }, [])

  // 2. Handle saving new selection
  const handleSave = async () => {
    setSaving(true)
    try {
      await api.put(`/currency/${currencyId}/`, { currency })
      setSuccess('Currency updated successfully.')
      setError('')
      onClose()
      window.location.reload();
    } catch (err) {
      console.error('Currency update error:', err)
      setError('Failed to update currency. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Change Currency</h3>

        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options.map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>

        {/* 3. Error Message */}
        {error && (
          <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
        )}

        <div>
          <button onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
          <button onClick={onClose} style={{ marginLeft: '10px' }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CurrencyModal
