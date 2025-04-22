import { useState, useEffect } from 'react';
import { generateCalendarGrid } from '../../src/utils/generateCalendarGrid'
import styles from "../styles/CalendarView.module.css";

export default function CalendarView() {
  const today = new Date();
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    const year = today.getFullYear();
    const month = today.getMonth(); // 0-indexed
    const data = generateCalendarGrid(year, month);
    setCalendarData(data);
  }, []);

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
                <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                  -£{cell.expenditure}
                </div>
                <div className={styles['cal-day-income']}>
                  +£{cell.income}
                </div>
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
