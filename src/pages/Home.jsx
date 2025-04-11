import React from 'react'
import { Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ExpenditureList from '../components/ExpenditureList'
import SettingsDropdown from './SettingsDropdown'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
        <SettingsDropdown />
      <div className="finance-list-section">
        <ExpenditureList />
      </div>
    </div>
  )
}

export default Home