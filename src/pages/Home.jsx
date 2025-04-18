import { React,useState } from 'react'
import ExpenditureList from '../components/expenditureSection/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/incomeSection/IncomeList'
import DisIncomeBudget from '../components/disposableIncomeSection/DisIncomeBudget'
import DisIncomeSpendList from '../components/disposableIncomeSection/DisIncomeSpendList'
import MonthlySummary from '../components/summaryViews/MonthlySummary'

const Home = () => {
  const [spendingChanged, setSpendingChanged] = useState(false)

  return (
    <div className="home-page">
      <SettingsDropdown />
      <div className="summary-section">
        <MonthlySummary />
      </div>
      <div className="finance-list-section">
        <ExpenditureList />
        <IncomeList />
        <DisIncomeBudget spendingChanged={spendingChanged}/>
        <DisIncomeSpendList onSpendingChange={() => setSpendingChanged(prev => !prev)}/>
      </div>
    </div>
  )
}

export default Home