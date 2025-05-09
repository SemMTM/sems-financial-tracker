import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults' 
import Modal from '../Modal'
import EditDisBudgetForm from './EditDisBudgetForm'
import styles from '../../styles/DisIncomeBudget.module.css'
import { useFinancialData } from '../../context/FinancialDataContext'
import { useCalendar } from '../../context/CalendarContext';


export default function DisIncomeBudget() {
  const { user } = useAuth()
  const { getSelectedMonthParam, selectedDate } = useCalendar();
  const { dataVersion, notifyChange } = useFinancialData();

  const [disBudget, setDisBudget] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)


  const fetchDisBudget = async () => {
    if (!user) return
    setError('')
    try {
      const res = await api.get(
        `/disposable-budget/?month=${getSelectedMonthParam()}`)
      setDisBudget(res.data)
    } catch (err) {
      console.error('Failed to fetch budget:', err)
      setError('Failed to load budget.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDisBudget()
  }, [user, dataVersion, selectedDate])
  
  // 4. Handle edit s
  const handleEdit = (item) => {
    setModalContent(
      <EditDisBudgetForm
        item={item}
        onClose={() => setShowModal(false)}
        onUpdate={() => {
          fetchDisBudget();
          notifyChange();
        }}
      />
    )
    setShowModal(true)
  }

  if (!user) return <p>Please log in to view budget.</p>
  if (error) return <p>{error}</p>
  if (isLoading) 
    return (
      <div className="list-section">
        <h3>Disposable Income Budget</h3>
        <div className='spinner'></div>;
      </div>
    )

  return (
    <div className="list-section">
      <h3>Disposable Income Budget</h3>

      {disBudget.length === 0 ? (
        <p>No disposable spending for this month.</p>
      ) : (
        <ul>
          <div>
            {disBudget.map((item) => (
              <li key={item.id} className="list-item">

                <span className="list-item-section"
                  style={{ 
                    fontSize: "18px",
                    paddingRight: "10px"
                   }}
                >
                  {item.formatted_amount}
                </span>

                <span className="btns-container">
                  <button className="edit-btn"
                    onClick={() => handleEdit(item)}
                    >Edit</button>
                </span>

                <span className={styles.remaining}
                > Remaining: {item.remaining_formatted}
                </span>
              </li>
            ))}
          </div>
        </ul>
      )}
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  )
}
