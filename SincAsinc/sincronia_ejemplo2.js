const {separador} = require('../utils.js')

function funcion1(){
    console.log("Soy parte de la funcion 1")
}

function funcion2(){
    console.log("Soy parte de la funcion 2")
    funcion1();
}

function funcion3(){
    console.log("Soy parte de la funcion 3")
    funcion2();
}

funcion3();

separador();

funcion2();