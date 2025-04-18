import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { FinancialDataProvider } from '../src/context/FinancialDataContext'
import './styles/utils.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FinancialDataProvider>
          <App />
        </FinancialDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)