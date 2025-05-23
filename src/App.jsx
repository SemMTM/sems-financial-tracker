import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInForm from './pages/auth/SignInForm'
import SignUpForm from './pages/auth/SignUpForm'
import PasswordResetForm from './pages/auth/PasswordResetFrom'
import ProtectedRoute from './components/ProtectedRoute'
import SettingsDropdown from '../src/pages/SettingsDropdown'
import { CalendarProvider } from '../src/context/CalendarContext'
import NotFound from './pages/NotFound'

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
            <CalendarProvider>  
              <Home />
            </CalendarProvider>  
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App