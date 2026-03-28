import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { I18nProvider } from './i18n/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <I18nProvider defaultLocale="fr">
        <App />
      </I18nProvider>
    </ErrorBoundary>
  </StrictMode>
)
