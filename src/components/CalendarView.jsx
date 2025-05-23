import { useState, useEffect, useCallback, useMemo } from 'react'
import api from '../api/axiosDefaults'
import { generateCalendarGrid } from '../../src/utils/generateCalendarGrid'
import styles from "../styles/CalendarView.module.css"
import { useFinancialData } from '../context/FinancialDataContext'
import { useCalendar } from '../context/CalendarContext'
import { cleanFormattedAmount } from '../utils/cleanAmount'

export default function CalendarView() {

  const fixedToday = useMemo(() => {
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return t
  }, []);

  const { getSelectedMonthParam, selectedDate } = useCalendar();
  const { dataVersion } = useFinancialData();

  const [calendarData, setCalendarData] = useState([]);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(true);


  // fetches calendar data from API
  const fetchSummary = useCallback(async () => {
    setLoading(true);
      try {
        const res = await api.get(`/calendar-summary/?month=${getSelectedMonthParam()}`);
        setSummary(res.data);
      } catch (err) {
        console.error('Failed to load calendar summary', err);
      } finally {
        setLoading(false);
      }
    },[getSelectedMonthParam]);
  
  useEffect(() => {
    fetchSummary();
  }, [dataVersion, fetchSummary]);

  // Merges data into generated calendar grid
  useEffect(() => {;
    const grid = generateCalendarGrid(selectedDate);
  
    const merged = grid.map(cell => {
      if (cell.type !== 'day') return cell;

      const localDate = new Date(cell.date);
      localDate.setHours(0, 0, 0, 0);

      const isPast = localDate < fixedToday;
  
      const iso = cell.date.toLocaleDateString('en-CA');
      const match = summary.find(item => item.date === iso);
  
      return {
        ...cell,
        income: match?.income || "0.00",
        expenditure: match?.expenditure || "0.00",
        symbol: match?.currency_symbol || "£",
        isPast,
      };
    });
  
    setCalendarData(merged);
  }, [summary, selectedDate]);

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
      <div className={styles['calendar-wrapper']}>
        {loading && (
          <div className={styles['calendar-overlay']}>
            <div className="spinner" />
          </div>
        )}
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
                  {typeof cell.expenditure === 'string' && cell.expenditure !== '0.00' && (
                    <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                      {cell.symbol}{cleanFormattedAmount(cell.expenditure)}
                    </div>
                  )}
                  {typeof cell.income === 'string' && cell.income !== '0.00' && (
                    <div className={`${styles['cal-day-income']} income-summary`}>
                      {cell.symbol}{cleanFormattedAmount(cell.income)}
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
    </div>
  );
}
