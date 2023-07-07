let inputNr = document.getElementById("input-text")

function firstCount() {
    let resultM = inputNr.value * 3.2808399
    let resultF = inputNr.value / 3.2808399
    if(document.getElementById("lengthH").innerText == "(Feet - Meter)")
    {
        document.getElementById("paragraph1").textContent = inputNr.value+" feet = "+resultF+" meter(s)"
    }
    else
    {
        document.getElementById("paragraph1").textContent = inputNr.value+" meter(s) = "+resultM+" feet"
    }
}

function secondCount() {
    let resultM = inputNr.value * 0.264172052
    let resultF = inputNr.value / 0.264172052
    if(document.getElementById("volumeH").innerText == "(Gallons - Liters)")
    {
        document.getElementById("paragraph2").textContent = inputNr.value+" gallon(s) = "+resultF+" liter(s)"
    }
    else
    {
        document.getElementById("paragraph2").textContent = inputNr.value+" liter(s) = "+resultM+" gallon(s)"
    }
}

function thirdCount() {
    let resultM = inputNr.value * 2.20462262
    let resultF = inputNr.value / 2.20462262
    if(document.getElementById("massH").innerText == "(Pounds - Kilograms)")
    {
        document.getElementById("paragraph3").textContent = inputNr.value+" pound(s) = "+resultF+" kilogram(s)"
    }
    else
    {
        document.getElementById("paragraph3").textContent = inputNr.value+" kilogram(s) = "+resultM+" pound(s)"
    }
}

function firstReverse() {
        if(document.getElementById("lengthH").innerText == "(Feet - Meter)")
        {
            document.getElementById("lengthH").innerText = "(Meter - Feet)"
        }
        else
        {
            document.getElementById("lengthH").innerText = "(Feet - Meter)"
        }
}

function secondReverse() {
    if(document.getElementById("volumeH").innerText == "(Liters - Gallons)")
    {
        document.getElementById("volumeH").innerText = "(Gallons - Liters)"
    }
    else
    {
        document.getElementById("volumeH").innerText = "(Liters - Gallons)"
    }
}

function thirdReverse() {
    if(document.getElementById("massH").innerText == "(Kilograms - Pounds)")
    {
        document.getElementById("massH").innerText = "(Pounds - Kilograms)"
    }
    else
    {
        document.getElementById("massH").innerText = "(Kilograms - Pounds)"
    }
}

function reverseAll() {
    firstReverse()
    secondReverse()
    thirdReverse()
}

function countAll() {
    firstCount()
    secondCount()
    thirdCount()
}