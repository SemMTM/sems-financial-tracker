import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to homepage after short delay (optional)
    const timer = setTimeout(() => {
      navigate('/')
    }, 2000) // 1.5 seconds for user context

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>Redirecting to the homepage...</p>
    </div>
  )
}