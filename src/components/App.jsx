import { useState, useEffect } from 'react'
import apiCall from '../api/index'
import '../styles/card.css'


function Card() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPokemon() {
      const response = await apiCall()
      setPokemon(response)
      setLoading(false)
    }
    fetchPokemon()
  }, [])

  async function handleRandomButton() {
    const response = await apiCall()
    setPokemon(response)
    setLoading(false)
  }

  function upperCase(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (
    <>
      <div className="card">
        { loading ? 
          ( <p>Loading...</p> ) : (
            <>
              <img src={pokemon.sprites.front_default} alt={`Sprite of ${pokemon.name}`} className='sprite'/>
              <p>{upperCase(pokemon.name)}</p>
            </>
          )
        }
      </div>
      <button onClick={handleRandomButton}>Random Pokemon</button>
    </>
  )
}
