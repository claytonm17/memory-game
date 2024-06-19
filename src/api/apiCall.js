async function randomApiCall() {
    // 1025 pokemon currently
    const randomID = Math.floor(Math.random() * 1025)

    const apiEndpoint = `https://pokeapi.co/api/v2/pokemon/${randomID}/`

    const response = await fetch(apiEndpoint)

    const data = await response.json()
    return data

}

export default randomApiCall;