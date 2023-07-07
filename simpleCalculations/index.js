let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    let finalNr = num1 + num2 
    sumEl.textContent = "Sum: "+finalNr 
}

function subtract() {
    let finalNr = num1 - num2 
    sumEl.textContent = "Difference: "+finalNr 
}

function divide() {
    let finalNr = num1 / num2 
    sumEl.textContent = "Quotient: "+finalNr 
}

function multiply() {
    let finalNr = num1 * num2 
    sumEl.textContent = "Product: "+finalNr 
}