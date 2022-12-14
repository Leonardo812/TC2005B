const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutas_juego = require('./routes/juego.routes');
app.use('/juego', rutas_juego);


app.use('/hola', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola"'); 
});


app.get('/info', (request, response, next) => {
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