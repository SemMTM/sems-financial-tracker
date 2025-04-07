import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()

  // 1. If no user, redirect to sign-in
  if (!user) return <Navigate to="/signin" replace />

  // 2. Otherwise, show protected content
  return children
}