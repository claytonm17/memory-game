import { useState, useEffect } from 'react'
import apiCall from '../api/index'
import '../styles/App.css'


function App() {
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

  return (
    <>
      <div className="pokemon-card">
        { loading ? 
          ( <p>Loading...</p> ) : (
            <>
              <img src={pokemon.sprites.front_default} alt={`Sprite of ${pokemon.name}`} />
              <p>{pokemon.name}</p>
            </>
          )
        }
      </div>
      <button onClick={handleRandomButton}>Random Pokemon</button>
    </>
  )
}

export default App
