var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

var pass1 = document.getElementById("pass-1");
var pass2 = document.getElementById("pass-2");
var pass3 = document.getElementById("pass-3");
var pass4 = document.getElementById("pass-4");
var pass5 = document.getElementById("pass-5");
var pass6 = document.getElementById("pass-6");
var finalLength = document.getElementById("search-box2");
var str = document.getElementById("search-box");
var validWordsArr = [];

function getRand(min = 0, max = 100) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
}

function generatePass() {
    var txt = str.value;
    validWordsArr = Array.from(txt);
    validWordsArr2 = Array.from(txt);
    validWordsArr3 = Array.from(txt);
    validWordsArr4 = Array.from(txt);
    validWordsArr5 = Array.from(txt);
    validWordsArr6 = Array.from(txt);
    var inputLength = txt.length
    var finalLengthA = finalLength.value;
    if(inputLength < finalLengthA) {
        for (var j = inputLength; j < finalLengthA; j++) {
            validWordsArr = validWordsArr.concat(characters[getRand(0, 91)]);
            validWordsArr2 = validWordsArr2.concat(characters[getRand(0, 91)]);
            validWordsArr3 = validWordsArr3.concat(characters[getRand(0, 91)]);
            validWordsArr4 = validWordsArr.concat(characters[getRand(0, 91)]);
            validWordsArr5 = validWordsArr2.concat(characters[getRand(0, 91)]);
            validWordsArr6 = validWordsArr3.concat(characters[getRand(0, 91)]);
        }
    }
    var x = 0;
    for(var i = 0; i < finalLengthA; i++) {
        x = getRand(0, validWordsArr.length);
        pass1.textContent += validWordsArr[x];
        validWordsArr.splice(validWordsArr.indexOf(validWordsArr[x]), 1);
        x = getRand(0, validWordsArr2.length);
        pass2.textContent += validWordsArr2[x];
        validWordsArr2.splice(validWordsArr2.indexOf(validWordsArr2[x]), 1);
        x = getRand(0, validWordsArr3.length);
        pass3.textContent += validWordsArr3[x];
        validWordsArr3.splice(validWordsArr3.indexOf(validWordsArr3[x]), 1);
        x = getRand(0, validWordsArr4.length);
        pass4.textContent += validWordsArr4[x];
        validWordsArr4.splice(validWordsArr4.indexOf(validWordsArr4[x]), 1);
        x = getRand(0, validWordsArr5.length);
        pass5.textContent += validWordsArr5[x];
        validWordsArr5.splice(validWordsArr5.indexOf(validWordsArr5[x]), 1);
        x = getRand(0, validWordsArr6.length);
        pass6.textContent += validWordsArr6[x];
        validWordsArr6.splice(validWordsArr6.indexOf(validWordsArr6[x]), 1);
    }
    document.querySelector('#first-btn').disabled = true;
}

function remove() {
    document.querySelector('#first-btn').disabled = false;
    pass1.textContent = "";
    pass2.textContent = "";
    pass3.textContent = "";
    pass4.textContent = "";
    pass5.textContent = "";
    pass6.textContent = "";
}