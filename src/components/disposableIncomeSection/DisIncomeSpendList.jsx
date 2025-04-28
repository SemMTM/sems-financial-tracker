import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../api/axiosDefaults'
import Modal from '../Modal'
import DisSpendForm from './DisSpendForm'
import EditDisSpendForm from './EditDisSpendForm'
import { useFinancialData } from '../../context/FinancialDataContext'

export default function DisSpendList() {
  const { user } = useAuth()
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const { notifyChange } = useFinancialData();

  const {
    data: disSpend = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['disSpend', user?.id],
    queryFn: async () => {
      const res = await api.get('/disposable-spending/');
      return res.data;
    },
    enabled: !!user,
  });

  // Fetch incomes from the backend
  const fetchDisSpend = () => {
    queryClient.invalidateQueries({ queryKey: ['disSpend', user?.id] })
    notifyChange()
  }

  // Handle add new expenditure
    const handleAdd = () => {
      setModalContent(
        <DisSpendForm
          onAdd={() => {
            fetchDisSpend()
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
            onUpdate={fetchDisSpend}
          />
        )
        setShowModal(true)
      }

  if (!user) return <p>Please log in to view incomes.</p>
  if (error) return <p>{error}</p>
  if (isLoading) return <p>Loading spending...</p>;

  return (
    <div className="list-section">
      <h3>Disposable Income Spending</h3>

      {disSpend.length === 0 ? (
        <p>No disposable spending for this month.</p>
      ) : (
        <ul>
          <div>
            <div className="list-titles-section">
              <span className="list-item-section list-title">
                Title
              </span>
              <span 
                className="
                  list-item-section 
                  list-title
                  list-item-section-2">
                Amount
              </span>
              <span 
                className="
                  list-item-section
                  list-title
                  list-item-section-3">
              </span>
              <span className="list-item-section list-title">
                Date
              </span>
            </div>
            {disSpend.map((item) => (
              <li key={item.id} className="list-item expenditure-item">

                <span 
                  className="list-item-section">
                  {item.title}
                  </span>

                <span className="list-item-section
                  list-item-section-2">
                  - {item.formatted_amount}
                  </span>

                <span 
                  className="list-item-section
                  list-item-section">
                  {item.type}
                </span>

                <span className="list-item-section list-item-section-4">
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
