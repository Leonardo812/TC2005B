const path = require('path');
const jugador = require('../models/jugador.model');

exports.getjuegos = (request, response, next) => {

    request.session.visitas = request.session.visitas ? ++ request.session.visitas : 1;
    console.log(request.session);
    response.render(path.join(__dirname, '..', 'views', 'juegos.ejs'), {
        visit:  request.session.visitas,
    });
};

exports.postjuegos = (request, response, next) => {
    console.log(request.body);
    if ( request.body.videojuegos == 1 ) {
        response.write("<h1>Gracias iniciado Fornite: </h1>");
        response.write('<img src="https://cdn2.unrealengine.com/21br-metaimage-lineup-1920x1080-44acd5f27136.jpg" width="500 "/>')
        

        
    } else if ( request.body.videojuegos == 2 ) {
        response.write("<h1>Gracias iniciado Dead by Daylight: </h1>");
        response.write('<img src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7" width="500 "/>')
            
    } else if ( request.body.videojuegos == 3 ) {
        response.write("<h1>Gracias iniciado League of Legends : </h1>");
        response.write('<img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f"  width="500"/>')
          
    } else if ( request.body.videojuegos == 4 ){
        response.write("<h1>Gracias iniciado Valorant: </h1>");
        response.write('<img src="https://i.blogs.es/78bc94/valorant2/1366_2000.jpg" width="500 "/>')
               
    } else {
        response.write("<h1>Lo sentimos, juego no encontrado: </h1>");
        response.write('<img src="https://sitechecker.pro/wp-content/uploads/2017/12/404.png" width="500 "/>')
    }
};