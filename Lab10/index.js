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

    } else if (request.url === "/trivia" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Pregunta al pulpo quién va a ganar</h1>");
        response.write('<form action="trivia" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Equipos</legend>');
        response.write('<label for="visitante">Visitante</label><input type="text" name="visitante" id="visitante">');
        response.write('<br><br>');
        response.write('<label for="local">Local</label><input type="text" name="local" id="local">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="Adivina">');
        response.write('</form>');
        response.end();
        filesystem.writeFileSync('M_trivia_get.txt', 'Direccion Trivia_get Funciona');
        console.log("Direccion Trivia_get Funciona");
        
    } else if (request.url === "/trivia" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_visitante = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_visitante);
            const dato_local = datos_completos.split('&')[1].split('=')[1];
            console.log(dato_local);
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>');
            response.write("<h1>El resultado es: </h1>");
            if (Math.floor(Math.random() * 2) == 0) {
                response.write('<h2>' + dato_visitante + '</h2>');
            } else {
                response.write('<h2>' + dato_local + '</h2>');
            }
            filesystem.writeFileSync('M_trivia_post.txt', 'Direccion Trivia_post Funciona');
            console.log("Direccion Trivia_post Funciona");
            return response.end();

        });
    } 
      
    
    
    
    else if (request.url === "/trivia" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Pregunta al pulpo quién va a ganar</h1>");
        response.write('<form action="trivia" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Equipos</legend>');
        response.write('<label for="visitante">Visitante</label><input type="text" name="visitante" id="visitante">');
        response.write('<br><br>');
        response.write('<label for="local">Local</label><input type="text" name="local" id="local">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="Adivina">');
        response.write('</form>');
        response.end();
    } else if (request.url === "/trivia" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_visitante = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_visitante);
            const dato_local = datos_completos.split('&')[1].split('=')[1];
            console.log(dato_local);
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>');
            response.write("<h1>El resultado es: </h1>");
            if (Math.floor(Math.random() * 2) == 0) {
                response.write('<h2>' + dato_visitante + '</h2>');
            } else {
                response.write('<h2>' + dato_local + '</h2>');
            }
            filesystem.writeFileSync('M_trivia.txt', 'Direccion Trivia Funciona');
            console.log("Direccion Trivia Funciona");
            return response.end();

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
