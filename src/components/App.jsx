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
      <Card index={game.deck[0].index} key={game.deck[0].index} onClick={handleCardClick}/>
      <Card index={game.deck[1].index} key={game.deck[1].index} onClick={handleCardClick}/>
      <Card index={game.deck[2].index} key={game.deck[2].index} onClick={handleCardClick}/>
      <Card index={game.deck[3].index} key={game.deck[3].index} onClick={handleCardClick}/>
      <Card index={game.deck[4].index} key={game.deck[4].index} onClick={handleCardClick}/>
    </>
  )
}

export default App