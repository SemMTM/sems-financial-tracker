import React from 'react'
import ExpenditureList from '../components/ExpenditureList'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to your financial dashboard</h1>
      <ExpenditureList />
    </div>
  )
}

export default Home