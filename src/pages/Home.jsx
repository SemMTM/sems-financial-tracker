import { React, useState } from 'react'
import ExpenditureList from '../components/expenditureSection/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/incomeSection/IncomeList'
import DisIncomeBudget from '../components/disposableIncomeSection/DisIncomeBudget'
import DisIncomeSpendList from '../components/disposableIncomeSection/DisIncomeSpendList'
import MonthlySummary from '../components/summaryViews/MonthlySummary'
import WeeklySummary from '../components/summaryViews/WeeklySummary'
import CalendarView from '../components/CalendarView'
import { useCalendar } from '../context/CalendarContext';

const Home = () => {
  const [viewMode, setViewMode] = useState('monthly');
  const [summaryMode, setSummaryMode] = useState('calendar');
  const { selectedDate, goToPreviousMonth, goToNextMonth } = useCalendar();

  return (
    <div className="home-page"> 
      <div className="summary-sec-con">
        <SettingsDropdown />

        {/* Month Switcher Section */}
        <div className="month-switcher">
          <button onClick={goToPreviousMonth}>←</button>

          <span className="current-month">
            {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            {/* Example: "April 2025" */}
          </span>

          <button onClick={goToNextMonth}>→</button>
        </div>

        {summaryMode === 'calendar' ? (
          <div className="summary-section">
          <CalendarView />
            <button onClick={() => setSummaryMode('summary')}>Change to summary view</button>
          </div>
        ) : (
          <div className="summary-section">
          {viewMode === 'monthly' ? (
            <MonthlySummary setViewMode={setViewMode} />
          ) : (
            <WeeklySummary setViewMode={setViewMode} />
          )}
            <button onClick={() => setSummaryMode('calendar')}>Change to calendar view</button>
          </div>
        )}
      </div>

      <div className="finance-list-section">
        <ExpenditureList />
        <IncomeList />
        <DisIncomeBudget />
        <DisIncomeSpendList />
      </div>
    </div>
  )
}

export default Home