import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import "./global.css"
import AppRouter from './AppRouter'
import AuthProviderWithNavigation from './auth/AuthProviderWithNavigation'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      {/* AuthProvider will need router to work */}
      <QueryClientProvider client={queryClient}>
        <AuthProviderWithNavigation>
          <AppRouter />
        </AuthProviderWithNavigation>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
