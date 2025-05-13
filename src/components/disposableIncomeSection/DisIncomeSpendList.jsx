import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import Modal from '../Modal'
import DisSpendForm from './DisSpendForm'
import EditDisSpendForm from './EditDisSpendForm'
import { useFinancialData } from '../../context/FinancialDataContext'
import { useCalendar } from '../../context/CalendarContext';
import { cleanFormattedAmount } from '../../utils/cleanAmount';


export default function DisSpendList() {
  const { user } = useAuth()
  const { notifyChange } = useFinancialData();
  const { getSelectedMonthParam, selectedDate } = useCalendar();

  const [disSpend, setDisSpend] = useState([])
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchDisSpend = async () => {
    if (!user) return
    setError('')
    try {
      const res = await api.get(`/disposable-spending/?month=${getSelectedMonthParam()}`)
      setDisSpend(res.data)
    } catch (err) {
      console.error('Failed to fetch spending:', err)
      setError('Failed to load spending.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDisSpend()
  }, [user, selectedDate])


  // Handle add new expenditure
    const handleAdd = () => {
      setModalContent(
        <DisSpendForm
          onAdd={() => {
            fetchDisSpend()
            notifyChange()
            setShowModal(false)
          }}
        />
      )
      setShowModal(true)
    }
  
    // 4. Handle edit s
      const handleEdit = (item) => {
        setModalContent(
          <EditDisSpendForm
            item={item}
            onClose={() => setShowModal(false)}
            onUpdate={() => {
              fetchDisSpend()
              notifyChange()
            }}
          />
        )
        setShowModal(true)
      }

  if (!user) return <p>Please log in to view incomes.</p>
  if (error) return <p>{error}</p>
  if (isLoading) 
    return (
      <div className="list-section">
        <h3>Monthly Expenditures</h3>
        <div className='spinner'></div>
      </div>
    )


  return (
    <div className="list-section">
      <h3>Disposable Income Spending</h3>

      {disSpend.length === 0 ? (
        <p>No disposable spending for this month.</p>
      ) : (
        <ul>
          <div>
            <div className="list-titles-section">

              <span className="list-item-section title list-title">
                Title
              </span>

              <span 
                className="
                  list-item-section
                  amount
                  list-title">
                Amount
              </span>

              <span className="list-item-section date list-title">
                Date
              </span>

              <span className="btns-container"></span>

            </div>
            {disSpend.map((item) => (
              <li key={item.id} className="list-item expenditure-item">

                <span 
                  className="list-item-section title">
                  {item.title}
                  </span>

                <span className="list-item-section amount">
                  - {cleanFormattedAmount(item.formatted_amount)}
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
          </div>
        </ul>
      )}

      <button onClick={handleAdd} className="add-btn">
        + Add a new spending
      </button>
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  )
}
