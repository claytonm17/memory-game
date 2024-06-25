import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card index="1" />
    <Card index="2" />
    <Card index="3" />
    <Card index="4" />
    <Card index="5" />
  </React.StrictMode>,
)
