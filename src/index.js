// Asynchrone avec setTimeoit
/*
console.log(1);
setTimeout(() => console.log(2), 10);
console.log(3);


// Asy,chrone Ajax avec la classe XHMLttpRequest

let monnaie = document.querySelector('.monnaie');

let ajax = new XMLHttpRequest;
ajax.responseType = "json";


setInterval(function(){
    ajax.addEventListener("readystatechange", function(){
        // si le readyState vaut 4 (ou XMLHttpRequest.DONE), c'est que la requete est terminée et la réponse est disponible
        if(ajax.readyState === ajax.DONE){
            // on fait ce qu'on veut faire avec notre reponse
            monnaie.innerHTML = ajax.response.EUR.last;
            console.log(ajax.response.EUR.last);
        }
    })
    // On prepare la requete ajax en indiquant la methode http et l'url de la ressource à requeter
    const url = "https://www.blockchain.com/ticker"
    ajax.open("GET", url);
    
    // on declenche la requete 
    ajax.send();
}, 10000
    
) */
setInterval(function(){
  let poste = document.querySelector('.poste');
  let ville = "Villeurbanne";
  let selectville = document.getElementById('ville')

  let ajax = new XMLHttpRequest;
  ajax.responseType = "json";

  ajax.addEventListener("readystatechange", function(){
      // si le readyState vaut 4 (ou XMLHttpRequest.DONE), c'est que la requete est terminée et la réponse est disponible
      if(ajax.readyState === ajax.DONE){
          // on fait ce qu'on veut faire avec notre reponse
          selectville.innerHTML = ville;
          poste.innerHTML = ajax.response.main.temp + '°C';
      }
  })
  // On prepare la requete ajax en indiquant la methode http et l'url de la ressource à requeter
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
  + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
  console.log(url);

  // on declenche la requete 
  ajax.open("GET", url)
  ajax.send();
},1000)