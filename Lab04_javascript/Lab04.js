//Ejercicio 1 
const num = prompt("Dame un numero: ");


function tabla(){
    let resultado = "<table>";
    resultado += "<tr><td>Número</td>" + "<td>n^2</td>" + "<td>n^3</td></tr>";
    for(let i = 1; i <= num;i++){
        resultado += "<tr>";
        resultado += "<td>" + i +  "</td>" + "<td>" + i*i +  "</td>"  + "<td>" + i*i*i +  "</td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    return resultado;
}
document.getElementById("res1").innerHTML = tabla();



//Ejercicio 2

var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random()*10);

var inicio = Date.now();
const suma = prompt("¿Cuánto es: " + num1 + "+" + num2 + "?");
var fin = Date.now();

function sumar(){
    resultado = num1 + num2;

    let respuesta = "La suma de " + num1 + " + " + num2 + " es: " + resultado + "<br></br>"
    
    if (resultado == suma){
        respuesta = respuesta + "¡Felicidades!  Tu respuesta es correcta";
    }
    else{
        respuesta = respuesta + "¡Mala suerte!  Tu respuesta es incorrecta";
    }
    
    let tiempo = (fin - inicio)/1000;

    respuesta = respuesta + "<br></br>Con un tiempo de: " + tiempo + " segundos";

    return respuesta;
}

document.getElementById("res2").innerHTML = sumar();


//Ejercicio 3 -- Función contador
//declaracion del Array
const arr = [0,5,-10,5,8,10,-4,2,3,-1,7,8,0,0];
let ceros = 0;
let positivos = 0;
let negativos = 0;

//funcion del Contador
function contador (array){
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            positivos++;
        }
        else if (array[i] < 0){
            negativos++
        }
        else {
            ceros++;
        }
    }
        alert("Ceros: "+ ceros +" Positivos: "+ positivos +" Negativos: "+ negativos);
}

alert("dentro del Array [0,5,-10,5,8,10,-4,2,3,-1,7,8,0,0] hay: ") + contador(arr);
document.getElementById("res3").innerHTML = contador();

