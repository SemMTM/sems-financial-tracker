import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInForm from './pages/auth/SignInForm'
import SignUpForm from './pages/auth/SignUpForm'
import PasswordResetForm from './pages/auth/PasswordResetFrom'
import ProtectedRoute from './components/ProtectedRoute'
import SettingsDropdown from '../src/pages/SettingsDropdown'

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/passwordreset" element={<PasswordResetForm />} />

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