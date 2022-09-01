const { request, response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.get('/playa', (request, response, next) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<h1>Hola que tal, ¡bienvenido! Sientate y disfruta el panorama</h1>"+
    '<img src="https://img.freepik.com/vector-gratis/fondo-colorido-siluetas-palmeras_23-2148544640.jpg?w=2000"/>';
    response.send(html);
});



const rutas_trivia = require('./routes/trivia.routes');
app.use('/paul', rutas_trivia);

app.use('/hola/lalo', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola/lalo"'); 
});



//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request,response, next) => {
    console.log("segundo midware");
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la rute holaaaaaaaaaaaaa "/hola"'); 
    next();
});



app.use((request, response, next) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<h1> Error404</h1>"+
    '<img src="https://img.freepik.com/vector-gratis/fondo-colorido-siluetas-palmeras_23-2148544640.jpg?w=2000"/>';
    console.log('Otro middleware sin reiniciar!');
    response.status(404);
    response.send(html); //Manda la respuesta
});






app.listen(3000);
       