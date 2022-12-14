const jugador = [];

module.exports = class Ganador {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(un_nombre) {
        this.nombre = un_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. Ej:
    //const un_ganador = new Ganador("Pumas");
    //un_ganador.save();
    save() {
        jugador.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente. 
    //Al ser un método estático, se ejecuta sobre la clase, no sobre una instancia de la clase. 
    //Ganador.fetchAll()  //Así se debe utilizar
    //
    //const un_ganador =  new Ganador();
    //un_ganador.fetchAll() //Así no se puede utilizar
    static fetchAll() {
        return jugador;
    }

}