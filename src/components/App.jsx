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
  const [deck, setDeck] = useState([...game.deck]);

  useEffect(() => {
    setDeck([...game.deck]); // Initialize deck state
  }, [game]);

  const handleCardClick = (index) => {
    game.select(index);
    game.shuffle();
    setDeck([...game.deck]); // Update state to trigger re-render
    game.debug();
  };

  return (
    <>
      {deck.slice(0, game.deck.length).map((card) => (
        <Card index={card.index} key={card.index} onClick={handleCardClick} />
      ))}
    </>
  )
}

export default App