const express = require('express');

const router = express.Router();


router.get('/hola', (request, response, next) => {
    let html =  '<!DOCTYPE html>' +
    '<head><meta charset="UTF-8"></head>'+
    "<hr>" +
    "<h1>Hola Soy: </h1>" +
    "<p>Leonardo Santiago Ramos Perez ___ A01707812</p>"+
    "<h1>Mi Correo es: </h1>"+
    "<p> a01707812@tec.mx</p>";
    response.send(html);
    next();
});


module.exports = router;