import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInForm from './pages/auth/SignInForm'
import SignUpForm from './pages/auth/SignUpForm'
import ProtectedRoute from './components/ProtectedRoute'
import SettingsDropdown from '../src/pages/SettingsDropdown'
import useRefreshToken from './hooks/useRefreshToken'

function App() {
  useRefreshToken()
  return (
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />

      {/* Protected app routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsDropdown />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App