import apiCall from './apiCall.js'

const pokemon = await apiCall()

console.log(pokemon.name)

export default apiCall