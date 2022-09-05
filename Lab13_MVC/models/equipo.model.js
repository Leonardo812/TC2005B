
const db = require('../util/database');

module.exports = class Equipo {

    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    save() {
        return db.execute('INSERT INTO equipos (nombre) VALUES (?)', [this.nombre]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM equipos');
    }

}