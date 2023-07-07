//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
let saveCount = 0

function increment() {
    console.log("clicked")
    count++
    countEl.innerText = count
    console.log(count)
}

function reset() {
    console.log("clicked")
    count = 0
    countEl.innerText = count
}

function save() {
    saveCount = count + " - "
    console.log(count)
    saveEl.textContent += saveCount
}

function clearSaved() {
    saveEl.textContent = "Previous numbers: "
}