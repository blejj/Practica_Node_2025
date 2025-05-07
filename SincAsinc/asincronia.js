const {entrar, saludoBienvenida, salir} = require('../Service/saludoService')

setTimeout(entrar, 2000);

setTimeout(saludoBienvenida, 3000, "franco");

setTimeout(salir, 4000);

console.log("Bueno bueno bueno")

//dependiendo del tiempo ingresado en el setTimeout, es en el orden que va a mostrarse.
//el que tiene menos tiempo es el que se muestra PRIMERO.

let vuelta = 0;

const intervalId = setInterval(() => {
    console.log("Estoy en la vuelta: " + vuelta);
    if(vuelta == 10){
        console.log("Llegaste a la vuelta 10");
        clearInterval(intervalId);
    }

    vuelta++;

}, 300);

console.log("Prueba");