const express = require('express');

const router = express.Router();

router.get('/juegos', (request, response, next) => {
    let html = '<!DOCTYPE html>' +
        '<head><meta charset="UTF-8"></head>' +
        "<h1> Bienvenido al gran salon </h1>" +
        '<form action="juegos" method="POST">' +
        '<img src="https://c.wallhere.com/photos/97/cc/video_games_digital_art_Space_Invaders_retro_games_black_background_minimalism_simple_background-258060.jpg!d" width="500 "/>'+
        '<fieldset>' +
        "<h1> Para jugar alguno de los videojuegos, seleccione una opción: <h1>" +
        "<h5> 1.- Fornite: </h5>" +
        "<h5> 2.- Dead by Daylight: </h5>" +
        "<h5> 3.- League of Legends: </h5>" +
        "<h5> 4.- Valorant: </h5>" +
        '<label for="videojuegos">Escribe</label><input type="text" name="videojuegos" id="videojuegos">'
        '</fieldset>' +
        '<input type="submit" value="Enviar">' +
        '</form>';
    response.send(html);
});

router.post('/juegos', (request, response, next) => {
    console.log(request.body);
    if (request.body.videojuegos == 1) {
        response.write("<h1>Gracias iniciado Fornite: </h1>");
        response.write('<img src="https://cdn2.unrealengine.com/21br-metaimage-lineup-1920x1080-44acd5f27136.jpg" width="500 "/>')
        
    } else if ( request.body.videojuegos == 2){
        response.write("<h1>Gracias iniciado Dead by Daylight: </h1>");
        response.write('<img src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7" width="500 "/>')
            
    }
    else if ( request.body.videojuegos == 3){
        response.write("<h1>Gracias iniciado League of Legends : </h1>");
        response.write('<img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f"  width="500"/>')
          
    }
    else if ( request.body.videojuegos == 4){
        response.write("<h1>Gracias iniciado Valorant: </h1>");
            response.write('<img src="https://i.blogs.es/78bc94/valorant2/1366_2000.jpg" width="500 "/>')
               
    }
    
    else {
        response.write("<h1>Lo sentimos, juego no encontrado: </h1>");
            response.write('<img src="https://sitechecker.pro/wp-content/uploads/2017/12/404.png" width="500 "/>')
        }

});

module.exports = router;