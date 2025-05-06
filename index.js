const {createServer} = require('node:http');

const PORT = 3000
const HOSTNAME = '127.0.0.1'

const server = createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Type', 'text/html')
    res.write('<H1> HOLA MUNDO DESDE MI SERVIDOR NODE </H1>')
    res.end()
});

server.listen(PORT, HOSTNAME, () => {
    console.log("El servidor esta corriendo en http://" + HOSTNAME + ":" + PORT)
})