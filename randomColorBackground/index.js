const background = document.querySelector('body')
const btn = document.querySelector('#btn-1')
const txt = document.querySelector('h1')

generateColor = () => Math.floor(Math.random() * 256)

btn.addEventListener('click', function setRGB() {
    background.style.backgroundColor = `rgb(${generateColor()},${generateColor()},${generateColor()})`;
    txt.innerText = background.style.backgroundColor
})

