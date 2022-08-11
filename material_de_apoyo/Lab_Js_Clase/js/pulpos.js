
//Forma moderna de declarar variables
//el alcance es a nivel de
let pulpo_mundial  = "Paul";
// Forma clásica de declarar variables
// El alcance es a nivel de función
var pulpo_voice = "Timoty";

console.log(pulpo_mundial);

for (let i = 0; i< 10;i++){
    console.log(i);
}


//La siguiente linea causa error porque i murió en el bloque anterior
//console.log(i)

for (var i = 0; i< 10;i++){
    console.log(i);
}
console.log(i);
