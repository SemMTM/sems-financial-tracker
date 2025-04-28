import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../api/axiosDefaults' 
import Modal from '../Modal'
import EditDisBudgetForm from './EditDisBudgetForm'
import styles from '../../styles/DisIncomeBudget.module.css'
import { useFinancialData } from '../../context/FinancialDataContext'

export default function DisIncomeBudget() {
  const { user } = useAuth()
  const queryClient = useQueryClient();

  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const { dataVersion, notifyChange } = useFinancialData();


  const {
    data: disBudget = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['disBudget', user?.id],
    queryFn: async () => {
      const res = await api.get('/disposable-budget/');
      return res.data;
    },
    enabled: !!user,
  });

  const fetchDisBudget = () => {
    queryClient.invalidateQueries({ queryKey: ['disBudget', user?.id] })
  }
  
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

  // Load incomes on mount or when user is set
  useEffect(() => {
    if (user) fetchDisBudget()
  }, [dataVersion])

  if (!user) return <p>Please log in to view budget.</p>
  if (error) return <p>{error}</p>
  if (isLoading) return <p>Loading budget...</p>;

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
