import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Add CSS
import './assets/css/addition.css';
import './assets/css/custom.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
 
  ,
)
