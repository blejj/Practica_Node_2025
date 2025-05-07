const {separador} = require('../utils.js')

function funcion1(){
    console.log("Ejecutando funcion 1")
}

function funcion2(){
    console.log("Ejecutando funcion 2")
}

function funcion3(){
    console.log("Ejecutando funcion 3")
}

funcion1();
funcion2();
funcion3();

separador();

funcion2();
funcion1();
funcion3();