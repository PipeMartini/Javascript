class Producto {
    constructor (id, pagina, imagen1,imagen2, modelo, precio, stock, talle) {
        this.id=id;
        this.pagina = pagina;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.talle = talle;
    }
};
 
const producto1=new Producto (`1`,`CampeGrisyAzul.html`, `image/Secventas/campe gris azul 1.jpg`,`image/Secventas/campe gris azul 2.jpg`, `Campera Rompevientos`, `1500$`, 203, `XL`);
const producto2=new Producto (`2`,`CanelonAzul.html`, `image/Secventas/canelon azul 1.jpg`, `image/Secventas/canelon azul 2.jpg`, `Campera de abrigo`, `1650$`, 23, "L");
const producto3=new Producto (`3`,`CanelonCeleste.html`, `image/Secventas/canelon celeste 1.jpg`, `image/Secventas/canelon celeste 2.jpg`, `Campera de abrigo`, `1650$`, 23, `S, M, L`);
const producto4=new Producto (`4`,`Canelongris.html`, `image/Secventas/canelon gris 3.jpg`, `image/Secventas/canelon gris 4.jpg`, `Campera de abrigo`, `1650$`, 2, `S, L, XL`);
const producto5=new Producto (`5`,`ProGris.html`, `image/Secventas/pro dama gris 1.jpg`, `image/Secventas/pro dama gris 2.jpg`, `Campera de cerro`, `17500$`, 15, `L,XL,XXL`);
const producto6=new Producto (`6`,`CanelonRojo.html`, `image/Secventas/canelon rojo 1.jpg`, `image/Secventas/canelon rojo 2.jpg`, `Campera de abrigo`, `1650$`, 26, `S`);

const baseDedatos = [producto1, producto2, producto3, producto4, producto5, producto6];

let productos=[]
let acumuladorstock = ``;

baseDedatos.forEach ((producto) => {
    acumuladorstock +=(`

<div id="CarouselProducto" class="container m-auto row col-lg-8 col-md-10 col-sm-12">
    <div id="demo" class="carousel slide col-lg-5 col-md-7 col-sm-6" data-ride="carousel">
        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${producto.imagen1}" alt="Foto1" height="100%">
            </div>
            <div class="carousel-item">
                <img src="${producto.imagen2}" alt="Foto2" width="1100" height="500">
            </div>
        </div>
    
        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
        </a>
    </div>
    <div id="AreaCompras" class="container col-lg-5 col-md-5 col-sm-6">
<!--INFO DEL PRODUCTO                                                                          ...............................-->
        <h3 id="nombreproducto">${producto.modelo}</h3>

        <h4 id="precio">${producto.precio}</h4>

        <h5>Descripcion del producto:</h5>

        <p>Esta campera esta diseñada para el dia a dia, ideal para protegerse del viento, la lluvia y la nieve. Es un producto muy liviano ya que en su interior esta forrada unicamente con tafeta aluminizada, la cual refleja la temperatura corporal. Esta campera sirve para casi todo el año y se adapta a muchas temperaturas (concepto de capas)</p>


        <div id="ComprarProducto">
            <p>Talle:</p>
            <select name="Talle" id="talle">
                <option value="S">Talle S</option>
                <option value="M">Talle M</option>
                <option value="L">Talle L</option>
                <option value="XL">Talle XL</option>
                <option value="XXL">Talle XXL</option>
            </select>
            <p>Cantidades:</p>
            <select name="Cantidad:" id="cantidad">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
            <a onclick="carrito()" id="ButonParchuse" class="btn btn-secondary active col-12 mt-1" role="button" aria-pressed="true">COMPRAR</a>
        </div>
        <table class="table table-hover col-lg-12 col-md-12 col-sm-8" id="TablaDeTalles">
            <thead>
            <tr>
                <th scope="col">Talle</th>
                <th scope="col">Espalda</th>
                <th scope="col">Largo de cuerpo</th>
                <th scope="col">Ancho de cadera</th>
                <th scope="col">Largo de mangas</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">S</th>
                <td>42cm</td>
                <td>71cm</td>
                <td>52cm</td>
                <td>68cm</td>
            </tr>
            <tr>
                <th scope="row">M</th>
                <td>45cm</td>
                <td>75cm</td>
                <td>56cm</td>
                <td>70cm</td>
            </tr>
            <tr>
                <th scope="row">L</th>
                <td>47cm</td>
                <td>79cm</td>
                <td>60cm</td>
                <td>73cm</td>
            </tr>
            <tr>
                <th scope="row">XL</th>
                <td>53cm</td>
                <td>82cm</td>
                <td>68cm</td>
                <td>76cm</td>
            </tr>
            <tr>
                <th scope="row">XXL</th>
                <td>55cm</td>
                <td>85cm</td>
                <td>72cm</td>
                <td>78cm</td>
            </tr>
            </tbody>
        </table>
    </div>
    
</div>
`)
});

document.getElementById("productoVentas").innerHTML = acumuladorstock

