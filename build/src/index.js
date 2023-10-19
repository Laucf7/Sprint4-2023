"use strict";
//NIVELL 1
const btn = document.querySelector('button');
const jokeContainer = document.querySelector('.joke-container');
const radioButtons = document.querySelectorAll('.radio-btn');
let currentJoke;
const reportJokes = [];
document.addEventListener("DOMContentLoaded", function () {
    bringJoke();
});
btn.addEventListener("click", (e) => {
    e.preventDefault();
    saveScoreDate();
    currentJoke = bringJoke();
    console.log(reportJokes);
});
function bringJoke() {
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    };
    fetch("https://icanhazdadjoke.com/", options)
        .then(res => res.json())
        .then(respuestaJson => {
        currentJoke = respuestaJson.joke;
        createJoke(respuestaJson);
    });
}
function createJoke(respuestaJson) {
    jokeContainer.textContent = respuestaJson.joke;
    console.log(respuestaJson);
}
function saveScoreDate() {
    let selectedInput = document.querySelector('input[name="punctuation"]:checked');
    let selectedInputValue;
    if (selectedInput == null) {
        selectedInputValue = "No score";
    }
    else {
        selectedInputValue = parseInt(selectedInput.value);
        selectedInput.checked = false;
    }
    let currentDate = new Date().toISOString().slice(0, 10);
    reportJokes.push({ joke: currentJoke, score: selectedInputValue, date: currentDate });
}
//# sourceMappingURL=index.js.map