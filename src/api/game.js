import Card from './card.js'

class Gameloop {
    constructor() {
        this.score = 0; // Score will increase as user selects "non-selected" cards
        this.deck = [];
        this.size = 5;
        this.state = {
            isRunning: false,
        }
    }

    start() {
        this.state.isRunning = true
        // Generate a set of 5 numbers (index for pokemon)
        const cards = new Set()
        while (cards.size < this.size) {
            const maxIndex = 1025 // Highest number a pokemon can be!

            const randomNum = Math.floor(Math.random() * maxIndex) + 1

            cards.add(randomNum)
        }
        for (const card of cards) {
            this.deck.push(new Card(card));
        }
    }

    debug() {
        console.log(`Game Running: ${this.state.isRunning}`)
        console.log(`Current Score: ${this.score}`)
        console.log(`Current Deck:`)
        for (let card of this.deck) {
            console.log(card)
        }
        console.log()
    }

    // Change this so that the index of card is what is being searched
    turn(index) {
        for (const card of this.deck) {
            if (card.index === index) { // Found
                
                if (card.selected) {
                    console.log("You lose!")
                    this.state.isRunning = false
                } 
                else {
                    card.selected = true
                    this.score += 1
                }
                if (this.score === this.size) {
                    console.log("You win!")
                    this.state.isRunning = false
                }
            }
        }
    }
}

const game = new Gameloop
game.start()
console.log(game.deck[0].index)
/*
game.debug()
game.turn(5)
game.turn(1)
game.turn(2)
game.turn(3)
game.turn(4)
game.debug()
*/
export default Gameloop