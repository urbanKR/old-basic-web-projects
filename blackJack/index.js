let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []

let player = {
    name: "Krzysztof",
    money: 124
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name+": $"+player.money

function getRandomCard() {
    let randCard = Math.floor(Math.random()*13) + 1
    if(randCard == 1)
    { 
        return 11
    }
    if(randCard > 10)
    {
        return 10
    }
    return randCard
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You've lost!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    
    if(isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}