//FIRST WAY - better way below ->

// const playerOneDisp = document.querySelector('#player-one-score')
// const playerTwoDisp = document.querySelector('#player-two-score')
// const selectEL = document.querySelector('select')
// const playerOneBtn = document.querySelector('#player-one-btn')
// const playerTwoBtn = document.querySelector('#player-two-btn')
// const resetBtn = document.querySelector('#reset-btn')

// let p1Score = 0
// let p2Score = 0
// let wScore = parseInt(selectEL.value)
// let isFinished = false


// playerOneBtn.addEventListener('click', function () {
//     if (!isFinished) {
//         p1Score += 1
//         if (p1Score === wScore) {
//             isFinished = true
//             playerOneDisp.classList.add('win')
//             playerTwoDisp.classList.add('lose')
//             playerOneBtn.disbled = true
//             playerTwoBtn.disbled = true
//         }
//         playerOneDisp.textContent = p1Score
//     }
// })

// playerTwoBtn.addEventListener('click', function () {
//     if (!isFinished) {
//         p2Score += 1
//         if (p2Score === wScore) {
//             isFinished = true
//             playerTwoDisp.classList.add('win')
//             playerOneDisp.classList.add('lose')
//             playerOneBtn.disabled = true
//             playerTwoBtn.disabled = true
//         }
//         playerTwoDisp.textContent = p2Score
//     }
// })

// function resteScore() {
//     isFinished = false
//     p1Score = 0
//     p2Score = 0
//     playerOneDisp.textContent = '0'
//     playerTwoDisp.textContent = '0'
//     playerOneDisp.classList.remove('win', 'lose')
//     playerTwoDisp.classList.remove('win', 'lose')
//     playerOneBtn.disabled = false
//     playerTwoBtn.disabled = false
// }

// resetBtn.addEventListener('click', resteScore)

// selectEL.addEventListener('change', function () {
//     wScore = parseInt(this.value)
//     resteScore()
// })


//More efficient way
const p1 = {
    score: 0,
    button: document.querySelector('#player-one-btn'),
    disp: document.querySelector('#player-one-score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player-two-btn'),
    disp: document.querySelector('#player-two-score')
}

const selectEL = document.querySelector('select')
const resetBtn = document.querySelector('#reset-btn')
let wScore = parseInt(selectEL.value)
let isFinished = false

function updateS(player, opponent) {
    if (!isFinished) {
        player.score += 1
        if (player.score === wScore) {
            isFinished = true
            player.disp.classList.add('win')
            opponent.disp.classList.add('lose')
            player.button.disbled = true
            opponent.button.disbled = true
        }
        player.disp.textContent = player.score
    }
}

p1.button.addEventListener('click', function () {
    updateS(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateS(p2, p1)
})

function resetScore() {
    isFinished = false
    p1.score = 0
    p2.score = 0
    p1.disp.textContent = '0'
    p2.disp.textContent = '0'
    p1.disp.classList.remove('win', 'lose')
    p2.disp.classList.remove('win', 'lose')
    p1.button.disabled = false
    p2.button.disabled = false
}

resetBtn.addEventListener('click', resetScore)

selectEL.addEventListener('change', function () {
    wScore = parseInt(this.value)
    resetScore()
})

