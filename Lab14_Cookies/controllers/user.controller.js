const path = require('path');

exports.logout = (request, response, next) => {
    
    request.session.destroy(() => {
        response.redirect('/juego/juegos'); //Este código se ejecuta cuando la sesión se elimina.
    });
};