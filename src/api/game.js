import Card from './card.js'

class Gameloop {
    constructor() {
        this.score = 0; // Score will increase as user selects "non-selected" cards
        this.deck = [];
        this.correct = 0;
        this.state = {
            isRunning: false,
        }
    }

    start() {
        this.state.isRunning = true
        // Generate a set of 5 numbers (index for pokemon)
        const cards = new Set()
        while (cards.size < 5) {
            const maxIndex = 1025

            const randomNum = Math.floor(Math.random() * maxIndex) + 1

            cards.add(new Card(randomNum))
        }
        for (const card of cards) {
            this.deck.push(card);
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

    turn(position) {
        // Lose condition
        if (this.deck[position].selected === true) {
            console.log("You lose!")
            this.state.isRunning = false
        } 
        else {
            this.deck[position].selected = true;
            this.score += 1
        }
    }
}

const game = new Gameloop
game.debug()
game.start()
game.debug()
game.turn(0)
game.debug()

export default Gameloop