import React from 'react'
import { Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ExpenditureList from '../components/ExpenditureList'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <button
        onClick={() => navigate('/settings')}
        className="settings-button"
        title="Settings"
      >
        <Settings />
      </button>
      <div className="finance-list-section">
        <ExpenditureList />
      </div>
    </div>
  )
}

export default Home