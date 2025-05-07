const { response } = require("express");

function validarStock(producto) {
    return new Promise((resolve, reject) => {
        console.log("validando el stock...")
        setTimeout(() => {
            if (producto === 'papel') {
                resolve("Hay stock disponible de " + producto)
            } else {
                reject("No hay stock de " + producto)
            }
        }, 5000);
    })
}

function ejecutarVenta(stockValidado){
    console.log("La respuesta es: " + stockValidado)
    return new Promise((resolve, reject)=>{
        console.log("Ejecutar venta");
        setTimeout(() => {
            resolve("Se ejecuta la venta: " + stockValidado)
        }, 2000);
    })
}

function imprimirFactura(ventaRealizada){
    console.log("Imprimiendo factura...")
    return new Promise((resolve, reject)=>{
        if(ventaRealizada){
            resolve("Factura realizada y enviada! ")
        }else{
            console.log("Error, no se pudo imprimir la factura!")
        }
    })
}

validarStock("papel")
    .then( (response) => { //el response espera el resolve de la linea 6.
        console.log("Estoy ejecutando el .then de validarStock")
        console.log("La respuesta recibida es: " + response)
        return ejecutarVenta(response)
    })
    .then((response) =>{
        console.log("Estoy ejecutando el .then de ejecutarVenta")
        console.log("La respuesta recibida es: " + response) 
        return imprimirFactura(response)
    })
    .then((response)=>{
        console.log("Estoy ejecutando el .then de imprimirFactura")
        console.log("La factura se realizo correctamente!")
    })
    .catch( (error) => {
        console.log("Estoy ejecutando el .catch de validarStock")
        console.log("El error es: " + error) 
    })
    .finally()