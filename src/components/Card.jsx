import { useState, useEffect } from 'react'
import apiCall from '../api/index'
import '../styles/card.css'

function Card({ index, onClick }) {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
  
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
        <div className="card" onClick={() => onClick(index)}>
          { loading ? 
            ( <p>Loading...</p> ) : (
              <>
                <img src={pokemon.sprites.front_default} alt={`Sprite of ${pokemon.name}`} className='sprite'/>
                <p>{upperCase(pokemon.name)}</p>
              </>
            )
          }
        </div>
    )
  }
  
  export default Card