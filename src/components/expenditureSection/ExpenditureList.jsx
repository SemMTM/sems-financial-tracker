import { useCallback, useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import ExpenditureForm from './ExpenditureForm'
import Modal from '../Modal'
import EditExpenditureForm from './EditExpenditureForm'
import { useFinancialData } from '../../context/FinancialDataContext'
import { useCalendar } from '../../context/CalendarContext';
import { cleanFormattedAmount } from '../../utils/cleanAmount';


export default function ExpenditureList() {
  const { user } = useAuth();
  const { notifyChange } = useFinancialData();
  const { getSelectedMonthParam, selectedDate } = useCalendar();

  const [expenditures, setExpenditures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Fetch expenditures from the backend
  const fetchExpenditures = useCallback(async () => {
    if (!user) return
    setError('');
    try {
      const res = await api.get(`/expenditures/?month=${getSelectedMonthParam()}`);
      setExpenditures(res.data || []);
    } catch {
      setError('Failed to load expenditures.');
    } finally {
      setIsLoading(false);
    }
  }, [user, getSelectedMonthParam]);

  useEffect(() => {
      fetchExpenditures();
    }, [fetchExpenditures, selectedDate]);

  // Handle add new expenditure
  const handleAdd = useCallback(() => {
    setModalContent(
      <ExpenditureForm
        onAdd={() => {
          fetchExpenditures();
          setShowModal(false);
          notifyChange();
        }}
      />
    );
    setShowModal(true);
  }, [fetchExpenditures, notifyChange]);

  // Handle edit s
  const handleEdit = useCallback((item) => {
    setModalContent(
      <EditExpenditureForm
        item={item}
        onClose={() => setShowModal(false)}
        onUpdate={() => {
          fetchExpenditures();
          notifyChange();
        }}
      />
    );
    setShowModal(true);
  }, [fetchExpenditures, notifyChange]);

  function formatType(type) {
    if (typeof type !== 'string') return ''
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  }

  if (!user) return <p>Please log in to view expenditures.</p>
  if (error) return <p>{error}</p>
  if (isLoading)
    return (
      <div className="list-section">
        <h3>Monthly Expenditures</h3>
        <div className='spinner'></div>
      </div>
    );

  return (
    <div className="list-section">
      <h3>Monthly Expenditures</h3>

      {expenditures.length === 0 ? (
        <p>No expenditures for this month.</p>
      ) : (
        <ul>
          <li className="list-titles-section">
            <span className="list-item-section title list-title">Title</span>
            <span className="list-item-section amount list-title">Amount</span>
            <span className="list-item-section type list-title">Type</span>
            <span className="list-item-section date list-title">Date</span>
            <span className="btns-container"></span>
          </li>
          {expenditures.map((item) => (
            <li 
              key={item.id} 
              className={`list-item expenditure-item ${
                new Date(item.date).setHours(0, 0, 0, 0) < today ? 'greyed-out' : ''
              }`}>

              <span 
                className="list-item-section title">
                {item.title}
              </span>

              <span className="list-item-section amount">
                -{cleanFormattedAmount(item.formatted_amount)}
                </span>

              <span 
                className="list-item-section type">
                {formatType(item.type)}
              </span>

              <span className="list-item-section date">
              {new Date(item.date).toLocaleDateString('en-GB', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })
              }
              </span>
              <span className="btns-container">
                <button className="edit-btn" 
                  onClick={() => handleEdit(item)}
                  >Edit</button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleAdd} className="add-btn">
        + Add a new expenditure
      </button>
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  );
}
