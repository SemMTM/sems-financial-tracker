import { React, useState } from 'react'
import ExpenditureList from '../components/expenditureSection/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/incomeSection/IncomeList'
import DisIncomeBudget from '../components/disposableIncomeSection/DisIncomeBudget'
import DisIncomeSpendList from '../components/disposableIncomeSection/DisIncomeSpendList'
import MonthlySummary from '../components/summaryViews/MonthlySummary'
import WeeklySummary from '../components/summaryViews/WeeklySummary'
import CalendarView from '../components/CalendarView'

const Home = () => {
  const [viewMode, setViewMode] = useState('monthly');
  const [summaryMode, setSummaryMode] = useState('calendar');

  return (
    <div className="home-page"> 
      <SettingsDropdown />

      {summaryMode === 'calendar' ? (
        <div className="summary-section">
        <CalendarView />
        </div>
      ) : (
        <div className="summary-section">
        {viewMode === 'monthly' ? (
          <MonthlySummary setViewMode={setViewMode} />
        ) : (
          <WeeklySummary setViewMode={setViewMode} />
        )}
        </div>
      )}
      {summaryMode === 'calendar' ? (
        <button onClick={() => setSummaryMode('summary')}>Change to summary view</button>
      ) : (
        <button onClick={() => setSummaryMode('calendar')}>Change to calendar view</button>
      )}

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