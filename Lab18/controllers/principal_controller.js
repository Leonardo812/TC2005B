const path = require('path');

exports.principal = (request, response, next) => {
    console.log('Ruta /principal');
    response.render('index', {
        username: request.session.username ? request.session.username : '',
    }); 
}