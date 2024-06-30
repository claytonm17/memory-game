import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import apiCall from '../api/index'
import '../styles/card.css'

function Card({ index, onClick, flipped }) {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    //const [flipped, setFlipped] = useState(false);
  
    useEffect(() => {
      async function fetchPokemon() {
        const response = await apiCall(index)
        setPokemon(response)
        setLoading(false)
      }
      fetchPokemon()
    }, [index])
  
    function upperCase(string) {
      return string[0].toUpperCase() + string.slice(1)
    }
  
    return (
        <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => {onClick(index)}}>
          <div className='card-front'>
            { loading ? 
              ( <p>Loading...</p> ) : (
                <>
                  <img src={pokemon.sprites.front_default} alt={`Sprite of ${pokemon.name}`} className='sprite'/>
                  <p>{upperCase(pokemon.name)}</p>
                </>
              )
            }
          </div>
          <div className='card-back'>
            <p>Placeholder for pokeball img</p>
          </div>
        </div>
    )
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
}
  
export default Card