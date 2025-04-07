import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInForm from './pages/auth/SignInForm'
import SignUpForm from './pages/auth/SignUpForm'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App