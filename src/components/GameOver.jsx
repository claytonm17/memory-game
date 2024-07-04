import '../styles/gameover.css'
import PropTypes from 'prop-types'

function Gameover({ isWon, onReset }) {
    return (
        <div className="gameover">
            <div className="popup">
                <p>Gameover!</p>
                <p>{isWon ? "You win!" : "You Lose!"}</p>
                <button onClick={onReset}>Restart</button>
            </div>
        </div>
    )
}

Gameover.propTypes = {
    isWon: PropTypes.bool.isRequired,
}

export default Gameover