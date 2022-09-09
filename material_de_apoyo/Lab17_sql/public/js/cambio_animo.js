const boton_cambio_animo = document.getElementById("cambiar_animo");

let is_happy = false;

const feliz = () => {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/pulpo_feliz.jpg" alt="Pulpo feliz" width="400">';
    boton_cambio_animo.innerText = "Triste";
    boton_cambio_animo.style.backgroundColor = "#f48fb1";
    is_happy = true;
    document.body.style.color = "#f48fb1";
}

const triste = () => {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML = '<img src="media/pulpo_triste.jpg" alt="Pulpo triste" width="400">';
    boton_cambio_animo.innerText = "Feliz";
    boton_cambio_animo.style.backgroundColor = "#01579b";
    is_happy = false;
}

//Default de la página
triste();

boton_cambio_animo.onclick = () => {
    if (is_happy) {
        triste();
    } else {
        feliz();
    }
}

const sentimiento = document.getElementById("sentimiento");

sentimiento.onkeyup = () => {
    document.getElementById("descripcion_sentimiento").innerText = sentimiento.value;
}