import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExpenditureList from '../components/expenditureSection/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/incomeSection/IncomeList'
import DisIncomeSpendList from '../components/disposableIncomeSection/DisIncomeSpendList'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
        <SettingsDropdown />
      <div className="finance-list-section">
        <ExpenditureList />
        <IncomeList />
        <DisIncomeSpendList />
      </div>
    </div>
  )
}

export default Home