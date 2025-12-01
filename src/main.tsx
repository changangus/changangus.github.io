import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { ModeProvider } from './context/ModeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </HelmetProvider>
  </StrictMode>,
)
