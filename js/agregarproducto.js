let productos=[]
const carrito=[]
class Tienda {
    constructor (imagen, modelo, precio, stock, talle) {
        this.imagen = imagen || undefined;
        this.modelo = modelo || undefined;
        this.precio = precio || undefined;
        this.stock = stock || undefined; 
        this.talle = talle || undefined;
    }
}

function agregarProducto (){
    let confirmacion = confirm ('¿desea agregar nuevos productos?')
    console.log(confirmacion)
    if (confirmacion){
        let cantidad = prompt ('introduce la cantidad de productos que deseas agregar')
        for (let i = 0; i < cantidad; i++){
            let nombre= prompt ('ingrese el nombre del producto');
            let precio= prompt ('ingrese el precio del producto SIN el signo $');
            let stock= prompt ('ingrese el stock del producto');
            let talle= prompt ('ingrese el talle del producto');
            let imagen= prompt('ingrese la direccion de la imagen')
            productos.push(new Tienda (imagen,nombre, precio, stock, talle));
            
            
        }
    }else{
        console.log('usted escogio no agregar nuevos productos')
    }
}
let tienda=agregarProducto();
productos.forEach(elementos=>{
    document.write(`
    <div class="cartas col-lg-4 col-md-4 col-sm-5 col-xs-12">
    <a href="CanelonAzul.html"><div class="c-img">
        <img src="${elementos.imagen}" alt="FotosProductos">
        <div class="txt">
            <h3>${elementos.modelo}</h3>
            <h5>${elementos.precio}</h5>
            <h6>Quedan: ${elementos.stock}</h6>
            <button id="comprar">Agregar al carriito</button>
        </div>
    </div></a>
</div> `)
})

document.getElementById("Cards").innerHTML = acumuladorstock