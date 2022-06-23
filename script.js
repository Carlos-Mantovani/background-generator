var css = document.querySelector('#css');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var body = document.querySelector('#gradient');
var randomButton = document.querySelector('#random-btn');

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ';';
}

function setRandomGradient() {
    var random1 = '#' + Math.floor(Math.random() * 999999);
    var random2 = '#' + Math.floor(Math.random() * 999999);
    body.style.background = `linear-gradient(to right, ${random1}, ${random2})`;
    css.textContent = body.style.background + ';';
}

setGradient()

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

randomButton.addEventListener('click', setRandomGradient);
