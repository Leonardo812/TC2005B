const express = require('express');
const { Session } = require('express-session');
const session = require('express-session');
const app = express();


app.use(session({
    secret:'123456',
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res)=>{
    req.session.usuario = 'Leonardo Ramos';
    req.session.rol = 'Admin';
    req.session.visitas = req.session.visitas ? ++ req.session.visitas : 1;
    console.log(req.session);
    res.send(`El usuario <strong> ${req.session.usuario}</strong>
    con rol <strong> ${req.session.rol}</strong 
    ha visitado esta pagina <strong> ${req.session.visitas}</strong`)

})

app.listen(3000, (req, res)=>{
    console.log('EL SERVIDOR ESTA ENCENDIDO');
})
