import styles from '../styles/CalendarView.module.css'


export default function CalendarView() {


  return (
    <div className="summary-sec-inner">
        <div>
            {/* Calendar Weekday titles */}
            <div className={`${styles['calendar-grid']} 
                ${styles['weekday-title-sec']}`}>
                <div className={styles['cal-day']}>
                    <span>M</span>
                </div>
                <div className={styles['cal-day']}>
                    <span>T</span>
                </div>
                <div className={styles['cal-day']}>
                    <span>W</span>
                </div>
                <div className={styles['cal-day']}>
                    <span>T</span>
                </div>
                <div className={styles['cal-day']}>
                    <span>F</span>
                </div>
                <div className={styles['cal-day']}>
                    <span>S</span>
                </div>
                <div className={styles['cal-day']}>
                    <span>S</span>
                </div>
            </div>

            {/* Week 1 */}
            <div className={`${styles['calendar-grid']} 
                ${styles['week-section']}`}>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        1
                    </div>
                    <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        2
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        3
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        4
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        5
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        6
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        7
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
            </div>

            {/* Week 2 */}
            <div className={`${styles['calendar-grid']} 
                ${styles['week-section']}`}>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        1
                    </div>
                    <div className={`${styles['cal-day-expen']} expenditure-summary`}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        2
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        3
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        4
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        5
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        6
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
                <div className={styles['cal-day']}>
                    <div className={styles['cal-day-num']}>
                        7
                    </div>
                    <div className={styles['cal-day-expen']}>
                        -£120
                    </div>
                    <div className={styles['cal-day-income']}>
                        +£300
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
