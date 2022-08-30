const path = require('path');
const Ganador = require('../models/ganador.model');

exports.getTrivia = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'paul', 'trivia.html'));
};

exports.postTrivia = (request, response, next) => {
    console.log(request.body);
    let nombreGanador = '';
    if (Math.floor(Math.random() * 2) == 0) {
        nombreGanador = request.body.visitante;
    } else {
        nombreGanador = request.body.local;
    }

    

    const unGanador = new Ganador(nombreGanador);
    unGanador.save();

    response.render(path.join('paul', 'ganador.ejs'), {
        ganador: unGanador.nombre, 
        ganadores: Ganador.fetchAll(),
    });
};