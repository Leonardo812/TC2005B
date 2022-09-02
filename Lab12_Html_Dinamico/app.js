const { request, response } = require('express');
const ejs = require('ejs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', 'views');
const rutas_trivia = require('./routes/trivia.routes');
const rutas_juegos = require('./routes/videojuegos.routes');
app.use(bodyParser.urlencoded({extended: false}));
 //template views
app.set('views' , ' views');
//template engine
app.set('views-engine' , 'ejs');
//pulic folder
app.use(express.static(path.join(__dirname, 'public')));




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

app.get('/lab04', (request, response, next) => {
    response.render(path.join(__dirname, 'views', 'index.ejs'));
});






app.get("/",(request, response) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<h1> No hay lugar como el hogar</h1>"+
    '<img src = " https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Revista_%C2%A1Hola%21_logo.svg/1200px-Revista_%C2%A1Hola%21_logo.svg.png" width="500 "/>';
    response.send(html); //Manda la respuesta
});

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
       