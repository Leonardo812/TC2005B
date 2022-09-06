const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log("Segundo middleware");
    next();
});

const rutas_trivia = require('./routes/trivia.routes');
app.use('/paul', rutas_trivia);

const rutas_juego = require('./routes/juego.routes');
app.use('/juego', rutas_juego);

app.use('/hola/lalo', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola/lalo"'); 
});

app.use('/hola', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola"'); 
});

app.get('/info', (request, response, next) => {
    console.log(path.join(__dirname));
    console.log(path.join(__dirname, '..'));
    console.log(path.join(__dirname, '..', 'views', 'index.html'));
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
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