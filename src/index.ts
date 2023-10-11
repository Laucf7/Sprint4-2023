//NIVELL 1:
//Exercici 1

const btn = document.querySelector('button') as HTMLButtonElement;
const jokeContainer = document.querySelector('.joke-container')  as HTMLDivElement;

document.addEventListener("DOMContentLoaded", function() {
  bringJoke();
});

btn.addEventListener("click", (e)=> {
  e.preventDefault();
  bringJoke();

});

function bringJoke(){
  const options = {
    headers: {
      'Accept': 'application/json'  
    }
  }

  fetch("https://icanhazdadjoke.com/", options)
  .then (res=> res.json())
  .then (respuesta => createJoke(respuesta))
}


function createJoke(respuesta:any){
  jokeContainer.textContent = respuesta.joke;
    console.log(respuesta)  
 }