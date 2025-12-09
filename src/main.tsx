import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ModeProvider } from './context/ModeProvider.tsx'
import './styles/global.css.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModeProvider>
  </StrictMode>,
)
