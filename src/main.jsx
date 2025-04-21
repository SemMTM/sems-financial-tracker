import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  persistQueryClient,
} from '@tanstack/react-query-persist-client'

import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'


import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { FinancialDataProvider } from '../src/context/FinancialDataContext'
import './styles/utils.css'


// Create query client with background refetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,          // Treat as always fresh unless you manually invalidate
      refetchOnMount: true,        // Recheck when component mounts
      refetchOnWindowFocus: false, // avoid extra polling
    },
  },
});

// LocalStorage persister
const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Enable persistence (indefinitely)
persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: Infinity, // Indefinite cache
  buster: 'v1',  // tracks the version of the cache 
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <FinancialDataProvider>
            <App />
          </FinancialDataProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)