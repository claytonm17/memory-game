function randomNumber() {
    // 1025 pokemon currently
    return Math.floor(Math.random() * 1025) + 1
}

async function randomApiCall(index) {
    const apiEndpoint = `https://pokeapi.co/api/v2/pokemon/${index}/`

    const response = await fetch(apiEndpoint)

    const data = await response.json()

    return data
}

async function apiCall(index) {
    //console.log("Starting API call")
    try {
        const response = await randomApiCall(index ? index : randomNumber())
        //console.log("Complete:", response)
        return response

    } catch(error) {
        //console.error("Call failed:", error)
        return null
    }
}

export default apiCall;