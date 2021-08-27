class Producto {
    constructor (modelo, precio, stock, talle) {
        this.modelo = modelo || undefined;
        this.precio = precio || undefined;
        this.stock = stock || undefined; 
        this.talle = talle || undefined;
    }
}
//al definirlo asi es dinamico. si yo el----> modelo = modelo anorak--->seria estatico
const Producto_1 = new Producto ("campera1", "14500$", 25, "L");
const Producto_2 = new Producto ("campera2", "14500$", 5, "M");
const Producto_3 = new Producto ("campera3", "16500$", 6, "S");
const Producto_4 = new Producto ("campera4", "13500$", 12, "L");
const Producto_5 = new Producto ("campera5", "12700$", 16, "XL");
const Producto_6 = new Producto ("campera6", "19600$", 2, "XXL");
const Producto_7 = new Producto ("campera7", "10000$", 3, "XS");

const BasedeDatos = [Producto_1, Producto_2, Producto_3, Producto_4, Producto_5, Producto_6, Producto_7];

// esta es la funcion que genera las cards de los productos
let acumulador = ``;
for (let i=0; i < BasedeDatos; i++){
    acumulador += `<div>
    <h3>${BasedeDatos[i].modelo} </h3>
    <p>${BasedeDatos[i].precio}</p>
    <p>${BasedeDatos[i].stock}</p>
    <p>${BasedeDatos[i].talle}/p>
    <button>Agregar al carrito</button>
</div>`
}
document.write (acumulador);