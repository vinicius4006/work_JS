/* 1
function makeDeck(){
const deck = []
const suits = ["hearts","diamonds","spades","clubs"]
const values = "A,2,3,4,5,6,7,8,9,10,J,Q,K"
for (let value of values.split(","))
    for (let suit of suits)
        deck.push({
            value,
            suit
        })
        return deck
    
}
function drawCard(deck){
    return deck.pop()
}
const makeDeck = makeDeck()
console.log(makeDeck.length)
const card1 = drawCard(makeDeck)
console.log(card1)
*/
//          2 
 const makeDeck = () =>  {
    return {
    deck: [],
    drawCards: [],
    suits: ["hearts","diamonds","spades","clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck(){
        const {
            suits,
            values,
            deck
        } = this
        for (let value of values.split(","))
        for (let suit of suits)
           deck.push({
               value,
               suit
           })
    },
    drawCard(){
        const card = this.deck.pop()
        this.drawCards.push(card)
        return card
    },
    drawMultiple(numCards){
        const cards = []
        for(let i = 0; i< numCards;i++)
            cards.push(this.drawCard())
                return cards
    },
    shuffle(){
        const {
            deck
        } = this
        
        for (let i = deck.length - 1; i > 0; i--){
            let j =  Math.floor(Math.random() * (i + 1));

             [deck[i], deck[j]] = [deck[j], deck[i]]
         }
        
    }
     
}
}//const firstDeck = initializeDeck()
const myDeck = makeDeck()
myDeck.initializeDeck()
myDeck.shuffle()
console.log(myDeck.deck)



