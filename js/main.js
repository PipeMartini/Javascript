class Producto {
    constructor (id, pagina, imagen, modelo, precio, stock, talle) {
        this.id=id;
        this.pagina = pagina;
        this.imagen = imagen;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.talle = talle;
    }
};
 
const producto1=new Producto (`1`,`CampeGrisyAzul.html`, `image/Cuadros hover/campera gris hombre.jpg`, `Campera Rompevientos`, `1500$`, 203, `XL`);
const producto2=new Producto (`2`,`CanelonAzul.html`, `image/Cuadros hover/canelon azul.jpg`, `Campera de abrigo`, `1650$`, 23, "L");
const producto3=new Producto (`3`,`CanelonCeleste.html`, `image/Cuadros hover/canelon celeste.jpg`, `Campera de abrigo`, `1650$`, 23, `S, M, L`);
const producto4=new Producto (`4`,`Canelongris.html`, `image/Cuadros hover/canelon gris.jpg`, `Campera de abrigo`, `1650$`, 2, `S, L, XL`);
const producto5=new Producto (`5`,`ProGris.html`, `image/Cuadros hover/pro gris mujer.jpg`, `Campera de cerro`, `17500$`, 15, `L,XL,XXL`);
const producto6=new Producto (`6`,`CanelonRojo.html`, `image/Cuadros hover/canelon rojo.jpg`, `Campera de abrigo`, `1650$`, 26, `S`);

const baseDedatos = [producto1, producto2, producto3, producto4, producto5, producto6];

let productos=[]
let acumuladorstock = ``;

baseDedatos.forEach ((producto) => {
    acumuladorstock += (`<div id="Cards" class="cartas col-lg-4 col-md-4 col-sm-5 col-xs-12">
    <a href=${producto.pagina}><div class="c-img">
        <img src="${producto.imagen}" alt="FotosProductos" class= "h-100">
        <div class="txt">
            <h3>${producto.modelo}</h3>
            <h5>${producto.precio}</h5>
            <h6>Quedan: ${producto.stock}</h6>
        </div>
    </div></a>
    <button id="comprar" onclick="AgregarAlCarro(${Producto.id})">Agregar al carriito</button>
    </div>`)
});

document.getElementById("Cards").innerHTML = acumuladorstock;

