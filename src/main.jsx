import { StrictMode } from 'react'
import { createRoot, ReactDOM} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)
