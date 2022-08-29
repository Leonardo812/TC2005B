setTimeout(() => console.log("código asíncrono"), 4000);
const { randomBytes } = require('crypto');
const filesystem = require('fs');
const http = require('http');

const server = http.createServer( (request, response) => {    
    //Obtener la URL de la petición
    console.log(request.url);
    //Obtener la IP de la petición
    console.log(request.socket.remoteAddress);

    if (request.url === "/hola") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Hola que tal, ¡bienvenido! Sientate y disfruta el panorama</h1>");
        response.write('<img src="https://img.freepik.com/vector-gratis/fondo-colorido-siluetas-palmeras_23-2148544640.jpg?w=2000"/>')
        response.end();
        filesystem.writeFileSync('M_hola.txt', 'Direccion Hola FUNCIONA');
        console.log("Direccion Hola FUNCIONA");

    } else if (request.url === "/adios"){
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Hasta Luego, vuelve pronto</h1>");
        response.write('<img src="https://i0.wp.com/www.elblogalternativo.com/wp-content/uploads/2014/06/despedida.jpg?fit=550%2C403&ssl=1"/>')
        response.end();
        filesystem.writeFileSync('M_adios.txt', 'Direccion adios FUNCIONA');
        console.log("Direccion Adios FUNCIONA");

    }
    
    
    else if (request.url === "/videojuegos" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1> Bienvenido al gran salon<h1>");
        response.write('<img src="https://c.wallhere.com/photos/97/cc/video_games_digital_art_Space_Invaders_retro_games_black_background_minimalism_simple_background-258060.jpg!d" width="500 "/>')
        response.write('<form action="videojuegos" method="POST">');
        response.write("<h1> Para jugar alguno de los videojuegos, seleccione una opción: <h1>");
        response.write("<h5> 1.- Fornite: </h5>");
        response.write("<h5> 2.- Dead by Daylight: </h5>");
        response.write("<h5> 3.- League of Legends: </h5>");
        response.write("<h5> 4.- Valorant: </h5>");
        response.write("<h3> Escriba solo el numero del juego </h3>");
        response.write('<label for="videojuegos">Videojuego</label><input type="text" name="videojuegos" id="videojuegos">');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.end();
    } 
    
    else if (request.url === "/videojuegos" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
            filesystem.writeFileSync("videojuegos.txt",dato);
        });
        return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        const games = datos_completos.split('&')[0].split('=')[1];
        console.log(datos_completos);
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        if (games == 1){
            response.write("<h1>Gracias iniciado Fornite: </h1>");
            response.write('<img src="https://cdn2.unrealengine.com/21br-metaimage-lineup-1920x1080-44acd5f27136.jpg" width="500 "/>')
            

        } else if ( games == 2){
            response.write("<h1>Gracias iniciado Dead by Daylight: </h1>");
            response.write('<img src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7" width="500 "/>')
            
        }else if ( games == 3){
            response.write("<h1>Gracias iniciado League of Legends : </h1>");
            response.write('<img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f"  width="500"/>')
            
        }else if ( games == 4){
            response.write("<h1>Gracias iniciado Valorant: </h1>");
            response.write('<img src="https://i.blogs.es/78bc94/valorant2/1366_2000.jpg" width="500 "/>')
            
        }
        else{
            response.write("<h1>Lo sentimos, juego no encontrado: </h1>");
            response.write('<img src="https://sitechecker.pro/wp-content/uploads/2017/12/404.png" width="500 "/>')
            response.write('<h2> Videojuego no encontrado, Error.</h2>');
        }
        // response.write("<h1>Gracias: </h1>");
        // response.write('<h2>' + games + '</h2>');
        response.end();
    });
    }  
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Error 404: Lo sentimos parece que este recurso esta en otro castillo</h1>");
        response.write('<img src="https://images.emojiterra.com/google/android-10/512px/1f61e.png" width="200 "/>')
        response.end();
        filesystem.writeFileSync('M_fallo.txt', 'Direccion fallo funciona');
        console.log("Direccion fallo funciona");
    }
    
});

server.listen(3000);
