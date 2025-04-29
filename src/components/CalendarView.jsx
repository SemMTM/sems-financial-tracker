import { useState, useEffect } from 'react';
import api from '../api/axiosDefaults'
import { generateCalendarGrid } from '../../src/utils/generateCalendarGrid'
import styles from "../styles/CalendarView.module.css";
import { useFinancialData } from '../context/FinancialDataContext'

export default function CalendarView() {
  const today = new Date();

  const [calendarData, setCalendarData] = useState([]);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true)

  const { dataVersion } = useFinancialData();

  // fetches calendar data from API
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await api.get('/calendar-summary/');
        setSummary(res.data);
      } catch (err) {
        console.error('Failed to load calendar summary', err);
      } finally {
        setLoading(false)
      }
    };
  
    fetchSummary();
  }, [dataVersion]);

  // Merges data into generated calendar grid
  useEffect(() => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const grid = generateCalendarGrid(year, month);
  
    const merged = grid.map(cell => {
      if (cell.type !== 'day') return cell;

      const localDate = cell.date;
      localDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      const isPast = localDate < today;
  
      const iso = cell.date.toLocaleDateString('en-CA');
      const match = summary.find(item => item.date === iso);
  
      return {
        ...cell,
        income: match?.income,
        expenditure: match?.expenditure,
        symbol: match?.currency_symbol,
        isPast,
      };
    });
  
    setCalendarData(merged);
  }, [summary]);

  // Loading spinner
  if (loading) {
    return <div className='spinner'></div>
  }

  return (
    <div>
      {/* Weekday Header */}
      <div className={`${styles['calendar-grid']} ${styles['weekday-title-sec']}`}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={i} className={styles['cal-day-title']}>
            <span>{day}</span>
          </div>
        ))}
      </div>

      {/* Calendar Body */}
      <div className={`${styles['calendar-grid']}`}>
        {calendarData.map((cell, index) => (
          <div
            key={index}
            className={`
              ${styles['cal-day']}
              ${cell.isToday ? styles['today'] : ''}
              ${cell.isPast ? styles['past-day'] : ''}
            `}
            >
            {cell.type === 'day' ? (
              <>
                <div className={styles['cal-day-num']}>
                  {cell.date.getDate()}
                </div>
                {Number(cell.expenditure) > 0 ? (
                  <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                    {cell.symbol}{cell.expenditure}
                  </div>
                ) : (
                  <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                    
                  </div>
                )}
                {cell.income !== '0.00' ? (
                  <div className={`${styles['cal-day-income']} income-summary`}>
                    {cell.symbol}{cell.income}
                  </div>
                ) : (
                  <div className={`${styles['cal-day-income']} income-summary`}>
                    
                  </div>
                )}
              </>
            ) : (
              <div className={styles['placeholder']}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
