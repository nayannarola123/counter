import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './components/comA'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
