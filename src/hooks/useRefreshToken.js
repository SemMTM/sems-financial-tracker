import { useEffect } from 'react'
import api from '../api/axiosDefaults'


// This hook silently calls the refresh endpoint every X minutes
export default function useRefreshToken(intervalMinutes = 50) {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await api.post('/dj-rest-auth/token/refresh/')
        console.log('Access token refreshed silently')
      } catch (err) {
        console.warn('Token refresh failed:', err)
      }
    }, intervalMinutes * 60 * 1000)

    return () => clearInterval(interval)
  }, [intervalMinutes])
}
