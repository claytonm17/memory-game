import '../styles/gameover.css'
import PropTypes from 'prop-types'

function Gameover({ isWon, onReset }) {
    return (
        <div className="gameover">
            <div className="popup">
                <p className='title'>Gameover!</p>
                <p>{isWon ? "You win!" : "You Lose!"}</p>
                <button className='reset' onClick={onReset}>Restart</button>
            </div>
        </div>
    )
}

Gameover.propTypes = {
    isWon: PropTypes.bool.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default Gameover