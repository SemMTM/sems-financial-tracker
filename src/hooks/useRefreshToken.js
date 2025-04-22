import { useEffect } from 'react'
import api from '../api/axiosDefaults'


// This hook silently calls the refresh endpoint every X minutes
export default function useRefreshToken(logout, intervalMinutes = 50) {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await api.post('/dj-rest-auth/token/refresh/')
      } catch (err) {
        console.warn('Token refresh failed:', err)
        logout()
      }
    }, intervalMinutes * 60 * 1000)

    return () => clearInterval(interval)
  }, [intervalMinutes])
}
