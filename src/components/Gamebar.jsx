import PropTypes from 'prop-types'
import '../styles/gamebar.css'

function Gamebar({ score }) {
    // Add function to change amount of cards played
    // Add function to change generation of pokemon used
    return (
        <nav className="gamebar">
            <div className="score">
                <p>Score: {score}</p>
            </div>
            <div className="controls">
                <input type="number" />
            </div>
        </nav>
    )
}

Gamebar.propTypes = {
    score: PropTypes.number.isRequired,
}

export default Gamebar