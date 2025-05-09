import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.scss'
import Approuter from './AppRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Approuter/>
    </BrowserRouter>
  </StrictMode>,
)
