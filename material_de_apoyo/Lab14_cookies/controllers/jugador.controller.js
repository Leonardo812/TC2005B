const path = require('path');

exports.logout = (request, response, next) => {
    
    request.session.destroy(() => {
        response.redirect('/paul/trivia'); //Este código se ejecuta cuando la sesión se elimina.
    });
};