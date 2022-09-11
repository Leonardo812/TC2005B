
DROP DATABASE IF EXISTS lab17;
CREATE DATABASE lab17;
USE lab17;


        CREATE TABLE perfil(
        idperfil integer NOT NULL AUTO_INCREMENT,
        nombre varchar(30),
        descripcion varchar(500),
        imagen varchar(500),
        
        PRIMARY KEY(idperfil)
    );

        CREATE TABLE Users(
        idUser integer NOT NULL AUTO_INCREMENT,
        username varchar(500),
        password varchar(500),
        
        PRIMARY KEY(idUser)
    );


