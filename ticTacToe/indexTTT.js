const newGameBtn = document.querySelector("#new-game-btn")
const selectEl = document.querySelector("#select-el")
let unselectedEl = "cross"
const resultLabel = document.querySelector("#result-label")
let boardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]


function startGame() {
    document.querySelectorAll(".tile").forEach((el, index) => {
        el.addEventListener("click", event => {
            if (el.children.length < 1 && checkForWin() === "noWin") {
                if (selectEl.value == "circle") {
                    unselectedEl = "cross"
                }
                else {
                    unselectedEl = "circle"
                }
                el.appendChild(addToBoard(selectEl.value))
                selectEl.disabled = true
                boardArr[index] = 1
                if (checkForWin() === "userW") {
                    resultLabel.textContent = "Congratulations! You have won"
                }
                //opponent move
                let opponentTile = randTile()
                if (hasZero(boardArr) && checkForWin() === "noWin") {
                    while (boardArr[opponentTile] != 0) {
                        opponentTile = randTile()
                    }
                    boardArr[opponentTile] = 2
                    document.querySelector(`#board div:nth-of-type(${opponentTile + 1})`).appendChild(addToBoard(unselectedEl))
                    if (checkForWin() === "computerW") {
                        resultLabel.textContent = "You have lost :( Try again!"
                    }
                }
            }
        })
    })
}

function checkForWin() {
    if (boardArr[0] === boardArr[1] && boardArr[0] === boardArr[2]) {
        if (boardArr[0] === 1) return "userW"
        else if (boardArr[0] === 2) return "computerW"
    }
    else if (boardArr[3] === boardArr[4] && boardArr[3] === boardArr[5]) {
        if (boardArr[3] === 1) return "userW"
        else if (boardArr[3] === 2) return "computerW"
    }
    else if (boardArr[6] === boardArr[7] && boardArr[6] === boardArr[8]) {
        if (boardArr[6] === 1) return "userW"
        else if (boardArr[6] === 2) return "computerW"
    }
    else if (boardArr[0] === boardArr[3] && boardArr[0] === boardArr[6]) {
        if (boardArr[0] === 1) return "userW"
        else if (boardArr[0] === 2) return "computerW"
    }
    else if (boardArr[1] === boardArr[4] && boardArr[1] === boardArr[7]) {
        if (boardArr[1] === 1) return "userW"
        else if (boardArr[1] === 2) return "computerW"
    }
    else if (boardArr[2] === boardArr[5] && boardArr[2] === boardArr[8]) {
        if (boardArr[2] === 1) return "userW"
        else if (boardArr[2] === 2) return "computerW"
    }
    else if (boardArr[0] === boardArr[4] && boardArr[0] === boardArr[8]) {
        if (boardArr[0] === 1) return "userW"
        else if (boardArr[0] === 2) return "computerW"
    }
    else if (boardArr[2] === boardArr[4] && boardArr[2] === boardArr[6]) {
        if (boardArr[2] === 1) return "userW"
        else if (boardArr[2] === 2) return "computerW"
    }
    return "noWin"
}

const randTile = () => Math.floor(Math.random() * 9)

function hasZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            return true
        }
    }
    return false
}


function addToBoard(el) {
    let item = document.createElement('span');
    if (el == "cross") {
        item.innerHTML = "&#xd7"
    }
    item.classList.add(el)
    return item;
}

function clearBoard() {
    boardArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    document.querySelectorAll(".tile").forEach(el => {
        el.innerHTML = ''
    })
}


startGame()
newGameBtn.addEventListener("click", () => {
    resultLabel.textContent = ""
    clearBoard()
    startGame()
    selectEl.disabled = false
})
