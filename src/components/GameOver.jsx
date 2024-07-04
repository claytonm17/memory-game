import '../styles/gameover.css'
import PropTypes from 'prop-types'

function Gameover({ isWon }) {
    return (
        <div className="gameover">
            <div className="popup">
                <p>Gameover!</p>
                <p>{isWon ? "You win!" : "You Lose!"}</p>
            </div>
        </div>
    )
}

Gameover.propTypes = {
    isWon: PropTypes.bool.isRequired,
}

export default Gameover