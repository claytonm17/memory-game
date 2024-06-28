import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card.jsx'
import Game from '../src/api/game.js'
import './styles/index.css'

const game = new Game
game.start()
game.debug()

const handleCardClick = (index) => {
  game.select(index)
  game.debug()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card index={game.deck[0].index} key={game.deck[0].index} onClick={handleCardClick}/>
    <Card index={game.deck[1].index} key={game.deck[1].index} onClick={handleCardClick}/>
    <Card index={game.deck[2].index} key={game.deck[2].index} onClick={handleCardClick}/>
    <Card index={game.deck[3].index} key={game.deck[3].index} onClick={handleCardClick}/>
    <Card index={game.deck[4].index} key={game.deck[4].index} onClick={handleCardClick}/>
  </React.StrictMode>,
)