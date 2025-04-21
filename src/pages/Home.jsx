import { React, useState } from 'react'
import ExpenditureList from '../components/expenditureSection/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/incomeSection/IncomeList'
import DisIncomeBudget from '../components/disposableIncomeSection/DisIncomeBudget'
import DisIncomeSpendList from '../components/disposableIncomeSection/DisIncomeSpendList'
import MonthlySummary from '../components/summaryViews/MonthlySummary'
import WeeklySummary from '../components/summaryViews/WeeklySummary'

const Home = () => {
  const [viewMode, setViewMode] = useState('monthly');

  return (
    <div className="home-page">
      <SettingsDropdown />
      <div className="summary-section">
        {viewMode === 'monthly' ? (
          <MonthlySummary setViewMode={setViewMode} />
        ) : (
          <WeeklySummary setViewMode={setViewMode} />
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