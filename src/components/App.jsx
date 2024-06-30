import { useState, useEffect } from 'react'
import Card from '../components/Card.jsx'
import Game from '../api/game.js'

function App() {

  const [game] = useState(() => {
    const newGame = new Game();
    newGame.start();
    newGame.debug();
    return newGame;
  });
  const [deck, setDeck] = useState([...game.deck])
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    setDeck([...game.deck]); // Initialize deck state
  }, [game]);

  const handleCardClick = (index) => {
    setFlipping(true)
    setTimeout(() => {
      game.select(index);
      game.shuffle();
      setDeck([...game.deck]); // Update state to trigger re-render
      game.debug();
      setTimeout(() => setFlipping(false))
    }, 1000) // This MUST match css flip animatio time
  };

  return (
    <>
      {deck.slice(0, game.deck.length).map((card) => (
        <Card 
          index={card.index} 
          key={card.index} 
          onClick={handleCardClick} 
          flipped={flipping}
        />
      ))}
    </>
  )
}

export default App