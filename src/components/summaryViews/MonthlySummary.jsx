import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosDefaults'
import styles from '../../styles/MonthlySummary.module.css'
import { useFinancialData } from '../../context/FinancialDataContext'
import { useCalendar } from '../../context/CalendarContext'
import { cleanFormattedAmount } from '../../utils/cleanAmount'


export default function MonthlySummary({ setViewMode }) {
  const { user } = useAuth();
  const [monthlySummary, setMonthlySummary] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { dataVersion } = useFinancialData();
  const { selectedDate, getSelectedMonthParam } = useCalendar();

  const isNegative = (str) => typeof str === 'string' && str.includes('-');

  const fetchSummary = useCallback(async () => {
    if (!user) return
    setError('');
    try {
      const res = await api.get(
        `/monthly-summary/?month=${getSelectedMonthParam()}`);
      setMonthlySummary(res.data  || {});
    } catch (err) {
      setError('Failed to load monthly summary.');
    } finally {
      setIsLoading(false);
    }
  }, [user, getSelectedMonthParam]);

  // Load summary on mount or when user is set
  useEffect(() => {
     fetchSummary()
  }, [fetchSummary, dataVersion, selectedDate]);

  const SummaryRow = ({ label, value, className, sign }) => (
    <li className="list-item sum-li-item">
      <span>{label}</span>
      <span className={className}>{sign}{value}</span>
    </li>
  );

  if (!user) return <p>Please log in to view summary.</p>
  if (error) return <p>{error}</p>
  if (loading) {
    return <div className='spinner'></div>
  }

  return (
    <div className="summary-sec-inner">
      <div className="summary-title-sec">
        <h3 className="summary-title">Monthly Summary</h3>
        <button onClick={() => setViewMode('weekly')}>Change to weekly</button>
      </div>

      <div className={styles['monthly-summary-sec-inner']}>
        <ul className={styles['month-sum-list']}>
          <SummaryRow
            label="Monthly Income"
            value={cleanFormattedAmount(monthlySummary.formatted_income) || '0.00'}
            className="income-summary"
            sign={"+"}
          />

          <SummaryRow
            label="Bills"
            value={cleanFormattedAmount(monthlySummary.formatted_bills) || '0.00'}
            className="expenditure-summary"
            sign={"-"}
          />

          <SummaryRow
            label="Savings"
            value={cleanFormattedAmount(monthlySummary.formatted_saving) || '0.00'}
            className="expenditure-summary"
            sign={"-"}
          />

          <SummaryRow
            label="Investment"
            value={cleanFormattedAmount(monthlySummary.formatted_investment) || '0.00'}
            className="expenditure-summary"
            sign={"-"}
          />

          <SummaryRow
            label="Disposable Income Spending"
            value={cleanFormattedAmount(monthlySummary.formatted_disposable_spending) || '0.00'}
            className="expenditure-summary"
            sign={"-"}
          />

          <li className="list-item sum-li-item">
            <strong><span>Summary</span></strong> 
            {monthlySummary?.formatted_total && (
              <span className={
                  isNegative(monthlySummary.formatted_total)
                  ? 'expenditure-summary' :
                  'income-summary'
                  }
                >
                {monthlySummary.formatted_total}
              </span>
            )}
          </li>
        </ul>

        <div className={styles['disp-sec-sum']}>
            <div>
              <div>Disposable Income Budget</div> 
              <div className="">
                {cleanFormattedAmount(monthlySummary.formatted_budget || '0.00')}
              </div>
            </div>

            <div>
              <div>Remaining Disposable Income</div> 

              {monthlySummary?.formatted_remaining_disposable && (
              <div
                className={
                  monthlySummary.formatted_remaining_disposable.includes('-')
                    ? 'expenditure-summary'
                    : ''
                }
              >
                {monthlySummary.formatted_remaining_disposable.includes('-')
                  ? cleanFormattedAmount(monthlySummary.formatted_remaining_disposable || '0.00')
                  : `${cleanFormattedAmount(monthlySummary.formatted_remaining_disposable || '0.00')}`}
              </div>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
