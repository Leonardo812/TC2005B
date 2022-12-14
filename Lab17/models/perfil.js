
const db = require('../util/database');

module.exports = class NPerfil{

    constructor(nuevo_nombre,nueva_descripcion,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }


    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save()  {
        return db.execute('INSERT INTO perfil (nombre, descripcion ,imagen) VALUES (?,?,?)',
        [this.nombre, this.descripcion ,this.imagen]
    );
    }


    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllNPerfil() {
        console.log(db.execute('SELECT * FROM perfil'));
         return db.execute('SELECT * FROM perfil');
    }
}
