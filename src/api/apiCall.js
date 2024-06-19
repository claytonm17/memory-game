async function randomApiCall() {
    // 1025 pokemon currently
    const randomID = Math.floor(Math.random() * 1025)

    const apiEndpoint = `https://pokeapi.co/api/v2/pokemon/${randomID}/`

    const response = await fetch(apiEndpoint)

    const data = await response.json()
    return data

}

async function apiCall() {
    console.log("Starting API call")

    try {
        const response = await randomApiCall()
        console.log("Complete:", response)
        return response

    } catch(error) {
        console.error("Call failed:", error)
        return null
    }
}

export default apiCall;