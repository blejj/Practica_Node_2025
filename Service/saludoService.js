function entrar(){
    console.log("INICIO");   
}

function saludoBienvenida(nombre){
    console.log("SALUDOS " + nombre + "!!!!");   
}

function salir(){
    console.log("SALIDA");   
}

module.exports = {
    entrar: entrar,
    saludoBienvenida: saludoBienvenida,
    salir: salir
}