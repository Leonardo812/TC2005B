// Función creada para verificar que las contraseñas sean iguales

const key = document.getElementById("k1");  
const confirm_key = document.getElementById("k2");
const boton = document.getElementById("verificar");
boton.addEventListener("click",Verificar_key);

function Verificar_key() {   
    if(key.value == confirm_key.value) {   
        alert("¡Password creado con exito!");  
    } 
    else {  
        alert("¡Error! Su password no coincide, intentelo de nuevo");  
    }  
} 


//Código del vitrual store
var removerCarritoButtons = document.getElementsByClassName('btn-danger');
for (var i = 0; i < removerCarritoButtons.length; i++){
    var button = removerCarritoButtons[i];
    button.addEventListener('click',function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        actualizarCarrito();
    })
}

var Cantidad_Inpt = document.getElementsByClassName('cart-quantity-input');
for (var i = 0; i < Cantidad_Inpt.length; i++){
    var input = Cantidad_Inpt[i];
    input.addEventListener('change',function(event) {
        var inputClicked = event.target;
        if (isNaN(inputClicked.value) || inputClicked.value <= 0) {
            input.value = 1;
        }
        actualizarCarrito();
    });
}

var addToCartButtons = document.getElementsByClassName('shop-item-button');
for (var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i];
    button.addEventListener('click',Agrega_Carrito);
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked);

function purchaseClicked() {
    alert('¡Transacción exitosa!')
    alert('¡Gracias por su compra!')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    actualizarCarrito()
}

function removerCarrito(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    actualizarCarrito()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarCarrito()
}

function Agrega_Carrito(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    actualizarCarrito()
}

function addItemToCart (title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title) {
            alert('Ya agregaste esto al carrito');
            return;
        }
    }
    var Contenido_Carrito = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger red darken-1" type="button">Quitar</button>
        </div>`
    cartRow.innerHTML = Contenido_Carrito;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removerCarrito)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}

function actualizarCarrito(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var precioElemento = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(precioElemento.innerText.replace('$',''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) /100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

//Calculo de Cuadrado

const lado = document.getElementById("lado1");  
const calc = document.getElementById("calcular");
calc.addEventListener("click",Operacion);

function Operacion() {   
    if (lado.value >= 1){
        var perimetro = 0;
        var dato = lado.value * 1;
        perimetro = dato + dato + dato + dato;
        var area = 0;
        area = lado.value * 4;
        alert("El perimetro es: " + perimetro);
        alert("El Area es: "+ area);  

    }
    else{
        alert("!Error¡ El dato introducido no es valido");  
    }
    
} 