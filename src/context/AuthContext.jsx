/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosDefaults'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  // Login using HttpOnly cookie session
  const login = async (username, password) => {
      await api.post('/dj-rest-auth/login/', {
         username, 
         password, 
        }
      );
      const res = await api.get('/dj-rest-auth/user/');
      setUser(res.data);
  }

  const logout = async () => {
    try {
      await api.post('/dj-rest-auth/logout/')
    } catch {
      // Silently ignore logout failures
    } finally {
      setUser(null);
      navigate('/signin');
    }
  }

  // 6. On load, restore session using valid access or refresh
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await api.get('/dj-rest-auth/user/');
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, [])

  if (isLoading && location.pathname !== '/signin') {
    return <div className="spinner"></div>
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
