//import { useState, useEffect } from 'react'
import Card from '../components/Card.jsx'
import Game from '../api/game.js'

function App() {

  const game = new Game
  game.start()
  //game.debug()

  const handleCardClick = (index) => {
    game.select(index)
    game.shuffle()
    game.debug()
  }

  // 

  return (
    <>
      {game.deck.slice(0, game.deck.length).map((card) => (
        <Card index={card.index} key={card.index} onClick={handleCardClick} />
      ))}
    </>
  )
}

export default App