import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import Modal from '../Modal'
import IncomeForm from './IncomeForm'
import EditIncomeForm from './EditIncomeForm'
import { useFinancialData } from '../../context/FinancialDataContext'
import { useCalendar } from '../../context/CalendarContext';
import { cleanFormattedAmount } from '../../utils/cleanAmount'


export default function IncomeList() {
  const { user } = useAuth()
  const { notifyChange } = useFinancialData();
  const { getSelectedMonthParam, selectedDate } = useCalendar();

  const [incomes, setIncomes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)


  const fetchIncomes = async () => {
    if (!user) return
    setError('')
    try {
      const res = await api.get(`/income/?month=${getSelectedMonthParam()}`)
      setIncomes(res.data)
    } catch (err) {
      console.error('Failed to fetch incomes:', err)
      setError('Failed to load incomes.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchIncomes()
  }, [user, selectedDate])

  // Handle add new income
    const handleAdd = () => {
      setModalContent(
        <IncomeForm
          onAdd={() => {
            fetchIncomes()
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
          <EditIncomeForm
            item={item}
            onClose={() => setShowModal(false)}
            onUpdate={() => {
              fetchIncomes()
              notifyChange()
            }}
          />
        )
        setShowModal(true)
      }

  if (!user) return <p>Please log in to view incomes.</p>
  if (error) return <p>Failed to load incomes.</p>;
  if (isLoading)
    return (
      <div className="list-section">
        <h3>Monthly Expenditures</h3>
        <div className='spinner'></div>;
      </div>
    )

  return (
    <div className="list-section">
      <h3>Monthly Income</h3>

      {incomes.length === 0 ? (
        <p>No incomes for this month.</p>
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

              <span className="list-item-section
                date
                list-title">
                Date
              </span>

              <span className="btns-container"></span>

            </div>
            {incomes.map((item) => (
              <li 
                key={item.id} 
                className={`list-item income-item ${
                  new Date(item.date).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0) 
                      ? 'greyed-out' 
                      : ''
                }`}>

                <span 
                  className="list-item-section title">
                  {item.title}
                  </span>

                <span className="list-item-section
                  amount">
                  {cleanFormattedAmount(item.formatted_amount)}
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
        + Add a new income
      </button>
      
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          {modalContent}
        </Modal>
      )}

    </div>
  )
}
