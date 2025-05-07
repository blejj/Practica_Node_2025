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

function ejecutarVenta(stockValidado) {
    console.log("La respuesta es: " + stockValidado)
    return new Promise((resolve, reject) => {
        console.log("Ejecutar venta");
        setTimeout(() => {
            resolve("Se ejecuta la venta: " + stockValidado)
        }, 2000);
    })
}

function imprimirFactura(ventaRealizada) {
    console.log("Imprimiendo factura...")
    return new Promise((resolve, reject) => {
        if (ventaRealizada) {
            resolve("Factura realizada y enviada! ")
        } else {
            console.log("Error, no se pudo imprimir la factura!")
        }
    })
}

async function procesarVenta(producto) {
    try {
        
        console.log("Estoy validando el stock!")
        const respuestaStock = await validarStock(producto)
        console.log("La respuesta que recibi es: " + respuestaStock)

        console.log("Estoy en ejecutarVenta!")
        const respuestaVenta = await ejecutarVenta(respuestaStock)
        console.log("La respuesta de la venta es: " + respuestaVenta)

        console.log("Estoy en imprimirFactura!")
        const respuestaFactura = await imprimirFactura(respuestaVenta)
        console.log("Factura impresa correctamente!")

    } catch (error) {
        console.log("Estoy ejecutando el .catch de validarStock")
        console.log("El error es: " + error)
    }
}

procesarVenta("papel")

