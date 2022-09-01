const { request, response } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rutas_trivia = require('./routes/trivia.routes');
const rutas_juegos = require('./routes/videojuegos.routes');

    
app.use(bodyParser.urlencoded({extended: false}));




const rutas_hola = require('./routes/hola.routes');

app.use(rutas_hola);
app.use(rutas_juegos);




const rutas_playa = require('./routes/playa.routes');

app.get('/playa', (request, response, next) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<h1>Hola que tal, ¡bienvenido! Sientate y disfruta el panorama</h1>"+
    '<img src="https://img.freepik.com/vector-gratis/fondo-colorido-siluetas-palmeras_23-2148544640.jpg?w=2000"/>';
    response.send(html);
});


app.use('/paul', rutas_trivia);
app.use('/playa', rutas_playa);




app.use((request, response, next) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<h1> Error404</h1>"+
    '<img src=https://sitechecker.pro/wp-content/uploads/2017/12/404.png" width="500 "/>';
    console.log('middleware 404');
    response.status(404);
    response.send(html); //Manda la respuesta
});
app.listen(3000);
       