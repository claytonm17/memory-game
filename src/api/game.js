import Card from './card.js'

class Gameloop {
    constructor() {
        this.score = 0; // Score will increase as user selects "non-selected" cards
        this.deck = [];
        this.size = 6;
        this.state = {
            isRunning: false,
        }
    }

    start() {
        this.state.isRunning = true
        // Generate a set of 5 numbers (index for pokemon)
        const cards = new Set()
        while (cards.size < this.size) {
            const maxIndex = 649 // Highest number a pokemon can be!
            const minIndex = 494

            const randomNum = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex

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
    select(index) {
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

    shuffle() {
        // Implement Fisher-Yates alg for shuffling deck
        const size = this.deck.length - 1

        for (let i = size; i > 0; i--) {
            const j = Math.floor(Math.random() * size);
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]] //swap
        }
        /*
        console.log(`After Shuffle:`)
        for (let card of this.deck) {
            console.log(card)
        }*/
    }
}

const game = new Gameloop
game.start()
game.shuffle()
//console.log(game.deck[0].index)
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