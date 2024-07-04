import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import Game from "../api/game.js";
import Gamebar from "../components/Gamebar.jsx";
import Gameover from "../components/GameOver.jsx";

function App () {
	const [game, setGame] = useState(() => {
		const newGame = new Game();
		newGame.start();
		newGame.debug();
		return newGame;
	});

	const [deck, setDeck] = useState([...game.deck]);
	const [flipping, setFlipping] = useState(false);
	const [score, setScore] = useState(game.score);
	const [gameover, setGamover] = useState(false);
	const [isWon, setIsWon] = useState(false);

	useEffect(() => {
		setDeck([...game.deck]); // Initialize deck state
	}, [game]);

	const handleCardClick = (index) => {
		setFlipping(true);
		setTimeout(() => {
			game.select(index);
			setScore(game.score);

			// Game still running condition
			if (game.state.isRunning) {
				game.shuffle();
				setDeck([...game.deck]); // Update state to trigger re-render
				game.debug();
			} else {
				console.log(game.state);
				setIsWon(game.state.won);
				setGamover(true);
			}
			// For some reason the cards visually glitch if the 10 isn' there
			setTimeout(() => setFlipping(false), 10);
		}, 1000); // This MUST match css flip animatio time
	};

	const handleReset = () => {
		const newGame = new Game();
		newGame.start();
		setGame(newGame);
		setDeck([...game.deck]);
		setScore(0);
		setGamover(false);
		setIsWon(false);
		setFlipping(false);
	};

	return (
		<>
			<Gamebar score={score} />
			<div className="card-deck">
				{deck.slice(0, game.deck.length).map((card) => (
					<Card
						index={card.index}
						key={card.index}
						onClick={handleCardClick}
						flipped={flipping}
					/>
				))}
			</div>
			{gameover && <Gameover isWon={isWon} onReset={handleReset}/>}
		</>
	);
}

export default App;
