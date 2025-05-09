import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/mian.scss"
import { BrowserRouter } from 'react-router-dom'
import Page from './pages/page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Page/>
    </BrowserRouter>
  </StrictMode>,
)
