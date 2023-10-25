
const btn = document.querySelector('button') as HTMLButtonElement;
const jokeContainer = document.querySelector('.joke-container')  as HTMLDivElement;
const radioButtons = document.querySelectorAll('.radio-btn');

const meteoContainer = document.querySelector('.meteo')  as HTMLDivElement;

let currentJoke: any;
let weather: string;
const reportJokes : Joke[] = [];


document.addEventListener("DOMContentLoaded", function() {
  bringJoke();
  bringMeteo();
});

btn.addEventListener("click", (e)=> {
  e.preventDefault();
  bringJoke();
  saveScoreDate();
  
  console.log(reportJokes);
});

function bringJoke(){

  const numeroAleatorio = Math.random();
  const umbral = 0.5;
  if (numeroAleatorio < umbral) {
    apiJokes();
  } else {
    apiChuck();
  }
}

function apiJokes(){
  const options = {
    headers: {
      'Accept': 'application/json'  
    }
  }

  fetch("https://icanhazdadjoke.com/", options)
  .then (res=> res.json())
  .then (respuestaJson => {
    currentJoke = respuestaJson.joke;
    jokeContainer.textContent = currentJoke;
    //console.log(currentJoke);
    console.log(respuestaJson);
  })
}
function apiChuck(){
  const options = {
    headers: {
      'Accept': 'application/json'  
    }
  }

  fetch("https://api.chucknorris.io/jokes/random", options)
  .then (res=> res.json())
  .then (respuestaJson => {
    currentJoke = respuestaJson.value;
   jokeContainer.textContent = currentJoke;
   //console.log(currentJoke);
   console.log(respuestaJson);
  })
}

 interface Joke {
  joke: string;
  score: number | null;
  date: string;
}


function saveScoreDate(): void {
  let selectedInput = document.querySelector('input[name="punctuation"]:checked') as HTMLInputElement;
  let selectedInputValue : any;
  if (selectedInput == null){
      selectedInputValue = "No score";
  }else{
      selectedInputValue = parseInt(selectedInput.value);
      selectedInput.checked=false;
  }
  let currentDate = new Date().toISOString().slice(0, 10);
  reportJokes.push({joke:currentJoke, score: selectedInputValue, date:currentDate});
}


function bringMeteo(){
  const options = {
    headers: {
      'Accept': 'application/json'  
    }
  }

  fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019', options) //link especific per Barcelona
  .then (res=> res.json())
  .then (respuestaJson =>{
     weather = `${respuestaJson.municipio.NOMBRE_PROVINCIA} : ${respuestaJson.temperatura_actual}ºC`
     meteoContainer.textContent = weather;
    //console.log(respuestaJson);
    })
}

