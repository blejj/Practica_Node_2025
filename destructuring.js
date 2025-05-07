const {separador} = require('./utils.js');

const x = [1,2,3,4,5,6];

const[y,z] = x

separador();

console.log(x)
console.log(y)
console.log(z)

separador();

// const var1 = 10;
// let var2 = 20;

// [var1 ,var2] = [var2, var1];

//no se puede porque var1 es una constante y no puede cambiarse el valor

separador();

let var3 = 10;
let var4 = 20;

[var3 ,var4] = [var4, var3];

console.log(var3);
console.log(var4);

separador();

const miObjeto = 
{
    nombre: "Franco",
    apellido: "Bleile",
    materia: "Backend"
};

miObjeto.nombre = "Ariel";

const {nombre} = miObjeto;

console.log(nombre);

separador();

