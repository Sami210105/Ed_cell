import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Error from './pages/Error.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
