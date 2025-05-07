let hayCrema = false;

//Definición de la promesa.
const comprarCrema = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(hayCrema){
            resolve("Te traje la crema");
        }
        else{
            reject("No hay crema");
        }
    }, 5000);
});

//Definición para promesa cumplida.
const manejarPromesaCumplida = (valor) => {
    console.log("Manejar promesa cumplida " + valor);
    console.log("Muchas gracias podré terminar la torta.");
}


//Definición para promesa rechazada.

const manejarPromesaRechazada = (valor) => {
    console.log("Manejar promesa rechazada " + valor);
    console.log("Tendré que hacer otra cosa!");
}

comprarCrema
    .then((response) => {
    console.log("entrando en el .then!");
    manejarPromesaCumplida(response);
    
})

    .catch((error) => {
    console.log("entrando en el .catch!");
    manejarPromesaRechazada(error);
})

    .finally((end) =>{
    console.log("Sigo cocinando igual");
    clearInterval(id);
})

const id = setInterval(() => {
    console.log("Haciendo otras cosas mientras espero la crema.");
}, 1000);