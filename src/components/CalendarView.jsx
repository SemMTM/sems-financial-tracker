import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import api from '../api/axiosDefaults'
import { generateCalendarGrid } from '../../src/utils/generateCalendarGrid'
import styles from "../styles/CalendarView.module.css";
import { useFinancialData } from '../context/FinancialDataContext'
import { useCalendar } from '../context/CalendarContext';
import { cleanFormattedAmount } from '../utils/cleanAmount';

export default function CalendarView() {
  const today = new Date();
  const { getSelectedMonthParam, selectedDate } = useCalendar();
  const { dataVersion } = useFinancialData();
  const scrollYBeforeUpdate = useRef(0);

  const [calendarData, setCalendarData] = useState([]);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true)

  // Capture scroll position before data updates
  useLayoutEffect(() => {
    scrollYBeforeUpdate.current = window.scrollY;

    // Freeze scroll during layout reflow
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYBeforeUpdate.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  }, [dataVersion]);

  // fetches calendar data from API
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await api.get(`/calendar-summary/?month=${getSelectedMonthParam()}`);
        setSummary(res.data);
      } catch (err) {
        console.error('Failed to load calendar summary', err);
      } finally {
        setLoading(false)
      }
    };
  
    fetchSummary();
  }, [dataVersion, getSelectedMonthParam]);

  // Merges data into generated calendar grid
  useEffect(() => {;
    const grid = generateCalendarGrid(selectedDate);
  
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
  }, [summary, selectedDate]);

  // Restore scroll position immediately after DOM update
  useLayoutEffect(() => {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';

    window.scrollTo(0, scrollYBeforeUpdate.current);
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
                {typeof cell.expenditure === 'string' && cell.expenditure !== '0.00' ? (
                  <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                    {cell.symbol}{cleanFormattedAmount(cell.expenditure)}
                  </div>
                ) : (
                  <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                    
                  </div>
                )}
                {typeof cell.income === 'string' && cell.income !== '0.00' ? (
                  <div className={`${styles['cal-day-income']} income-summary`}>
                    {cell.symbol}{cleanFormattedAmount(cell.income)}
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
