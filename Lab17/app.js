const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const rutas_users = require('./routes/user.routes');
const rutas_perfil = require('./routes/perfil.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));


app.use(cookieParser());
app.use(session({
    secret: 'Usuario', 
    resave: false, 
    saveUninitialized: false, 
}));


//Para login
app.use('/users', rutas_users);


 app.use('/perfil', rutas_perfil);

//Pagina principal (Middleware)

app.use((request, response, next) => {
    response.redirect('/users');
    next();
});



app.listen(3000, (req, res)=>{
    console.log('EL SERVIDOR ESTA ENCENDIDO :o ');
})
