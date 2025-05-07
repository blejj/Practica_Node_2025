const express = require('express')
const fs = require('node:fs');
const {infoLenguajes} = require('./lenguajesFrontBack.js');
const { separador } = require('./utils.js');

const app = express()
const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const HOME = fs.readFileSync('./index.html');
const ABOUT = fs.readFileSync('./about.html');

app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express!</h1>')
});

app.get('/api', (req, res) =>{
    res.send('<h1>Hola Mundo! Bienvenido al apartado API!</h1>');
});

app.get('/api/lenguajes', (req, res) =>{    
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(infoLenguajes));
});

app.get('/api/lenguajes/frontend/:lenguaje', (req, res) =>{
    const lenguaje = req.params.lenguaje;
    const paramOrdenar = req.query.ordenar;
    const otroParam = req.query.hola;

    console.log("El valor de query param es: " + paramOrdenar)
    console.log("El valor de query param es: " + otroParam)

    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    
    const filtrado = infoLenguajes.frontend.filter(
        (lenguajes) => {
            return lenguajes.nombre.toLocaleLowerCase() === lenguaje.toLocaleLowerCase()
        }
    )

    if(filtrado.length === 0){
        return res.status(404).send("No existe");
    }

    const mejores = infoLenguajes.frontend.filter(
        (queseyo) => {
            return queseyo.cantidadAlumnos > 30;
        }
    )

    separador();
    //acá lo que hago es que al filtrarlo, nos aparezca todos los cursos que tengan 30 alumnos.

    let mejoress = infoLenguajes.frontend.filter(cantidadDePersonas => cantidadDePersonas.cantidadAlumnos == 30)

    res.send(mejoress)
    
    separador();

    if(paramOrdenar === "losmejores"){
        return res.send(mejores)
    }
    
    res.send(filtrado);
});

app.get('/api/lenguajes/backend', (req, res) =>{    
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(infoLenguajes.backend));
});

app.get('/about', (req, res) => {
    res.send('<h1>Hola Mundo! Bienvenido al server con express desde el about!</h1>')
});

app.get('%', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`El servidor está corriendo en http://${HOSTNAME}:${PORT}/`);
});