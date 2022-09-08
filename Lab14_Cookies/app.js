const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret:'123456',
    resave: true,
    saveUninitialized: true
}))

const rutas_usuario = require('./routes/user.routes');
app.use('/user', rutas_usuario);

const rutas_juego = require('./routes/juego.routes');
app.use('/juego', rutas_juego);


app.use('/hola', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola"'); 
});



app.get("/",(request, response) => {
    response.render(path.join(__dirname, 'views', 'index.ejs'));
});

app.use((request, response, next) => {
    console.log('middleware 404');
    response.status(404);
    response.render(path.join(__dirname, 'views', 'error.ejs'));
   
});



app.listen(3000, (req, res)=>{
    console.log('EL SERVIDOR ESTA ENCENDIDO :)');
})
