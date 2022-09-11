const path = require('path');
const Perfil = require('../models/perfil');



// Perfiles de Jugadores
exports.get_nuevo_perfil = (request, response, next) => {
    Perfil.fetchAllNPerfil()
    .then(([rows, fieldData]) => {
        response.render('nuevoPerfil', {
            perfiles: rows,
            username: request.session.username ? request.session.username : '',
        })
    })
    .catch(err => console.log(err));
};

exports.post_nuevo_perfil = (request, response, next) => {    
    const jugador = new Perfil(request.body.nombre, request.body.descripcion,request.body.imagen);
    jugador.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_jugador='+ jugador.nombre +'; HttpOnly', 'utf8');
        response.render('index')
    }).catch(err => console.log(err));
    
};


exports.principal = (request, response, next) => {
    console.log('Ruta de Perfiles');
            Perfil.fetchAllNPerfil()
            .then(([perfil,fieldData]) => {
                response.render('perfil', {
                    perfil: perfil,
                    username: request.session.username ? request.session.username : '',
                })
            }).catch(error => {
                console.log(error);
            });
}

