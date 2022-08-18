setTimeout(() => console.log("código asíncrono"), 4000);
setTimeout(() => console.error("ERROR: System Failure"), 7000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("hola desde node");


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50, 20000];

//Imprime el arreglo en orden 
//porque se ejecuta con los timeouts de los valores del arreglo
// setTimeout (funcion o funcion anonima,{ lo que va a imprimir}, el tiempo que tarda en imprimir )

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.socket.remoteAddress);
    response.setHeader('Content-Type', 'text/html');
     response.write("<img src='https://sparkcdneus2.azureedge.net/sparkimageassets/XPDBZ4MPRKNN30-23547f88-151e-4a3c-b185-100552ef24bd' width=80 />");
     response.end();
});

server.listen(3000);