const db = require('../util/database');
const bcrypt = require('bcryptjs');


module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_username, nuevo_password) {
        this.username = nuevo_username;
        this.password = nuevo_password;
       
    }


    save() {
        
        return bcrypt.hash(this.password, 12)
            .then((C_password) => {
                console.log(this.username);
                console.log(C_password);
                return db.execute( 'INSERT INTO users(username, password) VALUES(?,?)',[ this.username, C_password]);
            }).catch((error) => {
                console.log("Error al cifrar el password");
                console.log(error);
                console.log(this.username);
                console.log(this.password);
            });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static findOne(username) {
        return db.execute('SELECT * FROM users WHERE username=?',
            [username]);
    }

}
