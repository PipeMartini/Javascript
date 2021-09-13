class ProductoCarro {
    constructor (nombre, precio, talle, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.talle = talle;
        this.cantidad = cantidad;

    }
}

let objetoagregado=[]

let carrito = function() {
let nombre = document.getElementById("nombreproducto");
let precio = document.getElementById("precio").value;
let talle = document.getElementById("talle").value;
let cantidad = document.getElementById("cantidad").value;
console.log("usted agrego al carro el producto: " + nombre + "   Precio: "+ precio + "   Talle: "+ talle + "   Unidades: " + cantidad);
objetoagregado.push(new ProductoCarro (nombre, precio, talle, cantidad));
localStorage.setItem ("nombreproducto", JSON.stringify(objetoagregado));
console.log(objetoagregado);
}

