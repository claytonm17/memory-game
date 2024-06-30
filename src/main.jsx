import React from 'react'
import ReactDOM from 'react-dom/client'
import Gamebar from '../src/components/Gamebar.jsx'
import App from '../src/components/App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Gamebar />
    <App />
  </React.StrictMode>,
)