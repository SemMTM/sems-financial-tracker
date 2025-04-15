import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExpenditureList from '../components/expenditureSection/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/incomeSection/IncomeList'
import DisIncomeBudget from '../components/disposableIncomeSection/DisIncomeBudget'
import DisIncomeSpendList from '../components/disposableIncomeSection/DisIncomeSpendList'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
        <SettingsDropdown />
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