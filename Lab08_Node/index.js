const filesystem = require('fs');
const http = require('http');

const arreglo = [10, 10, 10, 9, 10];



function Promedio(arreglo) {
    var i = 0, summ = 0, tam = arreglo.length;
    while (i < tam) {
        summ = summ + arreglo[i++];
}
    return summ / tam;
}

var res = Promedio(arreglo);
console.log(res)

const text = "hola si soy leo ";

function Escribe(p1){
    filesystem.writeFileSync('hola2.txt', p1);
}

Escribe(text);

function calculo(lado){
    var area = 0, perimetro = 0;
    area = lado * lado;
    perimetro = lado + lado +lado +lado;
    console.log("El area del Cuadrado es: " + area);
    console.log("El perimetro del Cuadrado es: " + perimetro);
}


var lado = 6;
var res = calculo(lado);



const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.socket.remoteAddress);
    response.setHeader('Content-Type', 'text/html');
     response.write('Promedio es '+ res);
     response.end();
});

server.listen(3000);