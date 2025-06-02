/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosDefaults'

const AuthContext = createContext();

const TEST_MODE = true;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(TEST_MODE ? { username: "MockUser" } : null);
  const [isLoading, setIsLoading] = useState(TEST_MODE ? false : true);
  const navigate = useNavigate();


  // Login using HttpOnly cookie session
  const login = async (username, password) => {
      if (TEST_MODE) {
        setUser({ username });
        return;
      }

      await api.post('/dj-rest-auth/login/', { 
        username, 
        password, 
        }
      );
      const res = await api.get('/dj-rest-auth/user/');
      setUser(res.data);
  }

  const logout = async () => {
    if (TEST_MODE) {
      setUser(null);
      navigate('/signin');
      return;
    }

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
    if (TEST_MODE) {
      // Skip real API call and set mock user immediately
      setUser({ username: "MockUser" });
      setIsLoading(false);
      return;
    }

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
