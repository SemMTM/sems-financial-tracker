import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExpenditureList from '../components/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'
import IncomeList from '../components/IncomeList'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
        <SettingsDropdown />
      <div className="finance-list-section">
        <ExpenditureList />
        <IncomeList />
      </div>
    </div>
  )
}

export default Home