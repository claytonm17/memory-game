import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card.jsx'
import Game from '../src/api/game.js'
import './styles/index.css'

const game = new Game
game.start()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card index={game.deck[0].index} />
    <Card index={game.deck[1].index} />
    <Card index={game.deck[2].index} />
    <Card index={game.deck[3].index} />
    <Card index={game.deck[4].index} />
  </React.StrictMode>,
)
