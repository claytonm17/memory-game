import PropTypes from 'prop-types'
import '../styles/gamebar.css'

function Gamebar({ score }) {

    return (
        <nav className="gamebar">
            <div className="score">
                <p>Score: {score}</p>
            </div>
            <div className="controls">
                <p>Add Deck Size Selector</p>
            </div>
        </nav>
    )
}

Gamebar.propTypes = {
    score: PropTypes.number.isRequired,
}

export default Gamebar