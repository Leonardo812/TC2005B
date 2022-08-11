
//Forma moderna de declarar variables
//el alcance es a nivel de
let pulpo_mundial  = "Paul"; //variable en el bloque
// Forma clásica de declarar variables
// El alcance es a nivel de función
var pulpo_voice = "Timoty"; //variable global

const precio_comida_pulpo = 9999; //declaracion de tipo de variable constantes

console.log(pulpo_mundial); //imprime console.log(x), donde x es lo que que quieres imprimir

for (let i = 0; i< 10;i++){
    console.log(i);
}


//La siguiente linea causa error porque i murió en el bloque anterior
//console.log(i)

for (var i = 0; i< 10;i++){
    console.log(i);
}
console.log(i);
console.info("Esto es informacion");
console.warn("Cuidado");
console.error("Error");
console.assert(i===10);// triple igual evalua no solo la equivalencia sino tambien que el tipo de dato sea igual
console.assert(true==1);
console.assert(true===1);
console.log(precio_comida_pulpo);

// ---------> alert, prompt, confirm

alert ("esto es una alerta"); // declaracion de alertas 
//prompt ("Dime tu nombre");  con el prompt podemos hacer los cin de c++ pedir un dato para el usuario vaya 
const nombre = prompt ("Dime tu nombre");
console.log("hola " + nombre + "!");
const hambre = confirm(" ¿Tienes hambre?"); //confirm si o no

if (hambre){
    alert("Ya casi es la hora de comer")
}
else{
    alert("Tienes que comer aunque no tengas hambre");
}

//funciones tradicionales
function comer(){
    const comida = "Picadillo";
    console.log(comida);
    return true;
}

const comida = comer;

if (hambre){
    alert("Ya casi es la hora de comer")
    comida();
}
else{
    alert("Tienes que comer aunque no tengas hambre");
}

//funciones modernas
const anon = () => console.log("anonimo");

anon();

const platillo_fuerte = (platillo) => {
     console.log("El " + platillo + " Esta delicioso");
}
platillo_fuerte(" tamal dulce");
platillo_fuerte();


// Arreglos

const menu = [" Papa al horno", " Arrachera", " Tamales"];

console.log(menu);

// in itera sobre los índices del arreglo
for (let p in menu){
    console.log(menu[p]);    
}

//of obtine cada uno de los elementos del arreglo 
for (let p of menu){
    console.log(p);    
}

menu[10]= "Pasta";
console.log(menu);

menu.length = 2;
console.log(menu);

menu.push("Pizza");
console.log(menu);


//arreglos asociativos

menu["postre"]= "Ate con queso";
console.log (menu);

//html dinamico 
const boton =  document.getElementById("boton_imagen");

boton.onclick = () => {
    console.log("Click!");
    document.getElementById("contenedor_imagen").innerHTML = 
    '<img src ="media/pulp.jpg" alt="imagen de un pulpo enojado"></img>'
}