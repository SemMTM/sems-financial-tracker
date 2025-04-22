import { useState, useEffect } from 'react';
import api from '../api/axiosDefaults'
import { generateCalendarGrid } from '../../src/utils/generateCalendarGrid'
import styles from "../styles/CalendarView.module.css";

export default function CalendarView() {
  const today = new Date();
  const [calendarData, setCalendarData] = useState([]);
  const [summary, setSummary] = useState([]);

  // fetches calendar data from API
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await api.get('/calendar-summary/');
        setSummary(res.data);
      } catch (err) {
        console.error('Failed to load calendar summary', err);
      }
    };
  
    fetchSummary();
  }, []);

  // Merges data into generated calendar grid
  useEffect(() => {
    const year = today.getFullYear();
    const month = today.getMonth();
    const grid = generateCalendarGrid(year, month);
  
    const merged = grid.map(cell => {
      if (cell.type !== 'day') return cell;
  
      const iso = cell.date.toISOString().split('T')[0];
      const match = summary.find(item => item.date === iso);
  
      return {
        ...cell,
        income: match?.income,
        expenditure: match?.expenditure,
        symbol: match?.currency_symbol,
      };
    });
  
    setCalendarData(merged);
  }, [summary]);

  return (
    <div>
      {/* Weekday Header */}
      <div className={`${styles['calendar-grid']} ${styles['weekday-title-sec']}`}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
          <div key={i} className={styles['cal-day']}>
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
            `}
            >
            {cell.type === 'day' ? (
              <>
                <div className={styles['cal-day-num']}>
                  {cell.date.getDate()}
                </div>
                {cell.expenditure !== '0.00' ? (
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
