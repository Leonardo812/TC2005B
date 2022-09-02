const path = require('path');
const Equipo = require('../models/equipo.model');

exports.getEquipos = (request, response, next) => {

    Equipo.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('equipo', 'equipo.ejs'), {
                equipos: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
    
    
};