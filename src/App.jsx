import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CalendarView from './pages/CalendarView'
import MonthlySummary from './pages/MonthlySummary'
import WeeklySummary from './pages/WeeklySummary'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarView />} />
      <Route path="/summary/monthly" element={<MonthlySummary />} />
      <Route path="/summary/weekly" element={<WeeklySummary />} />
    </Routes>
  )
}

export default App