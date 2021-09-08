// Se localiza donde renderizar los objetos y se guarda en una variable
const listaProductos = document.getElementById("app");

class Producto {
  constructor(title, description, stock, price, id) {
    this.title = title;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.id = id;
  }
}

const remeraRoja = new Producto("Remera Roja", "Remerita roja", 18, 450, 1);
const remeraNegra = new Producto("Remera Roja", "Remerita roja", 18, 450, 2);
const remeraVerde = new Producto("Remera Roja", "Remerita roja", 18, 450, 3);
const gorraNike = new Producto("Gorra Nike", "Gorra Nike negra", 18, 900, 4);

const baseDeDatosRopa = [remeraRoja, remeraNegra, remeraVerde, gorraNike];

const carrito = [];
let acumulador = ``;
baseDeDatosRopa.forEach((producto) => {
  acumulador += `
  <div class="col">
    <div class="card" style="width: 18rem;">
    <img src="http://http2.mlstatic.com/D_706470-MLA45869066076_052021-O.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title" id="descriptionProd">${producto.title}</h5>
        <p class="card-text" id="modelProd">${producto.description}</p>
        <p class="card-text" id="stockProd">${producto.stock}</p>
        <p class="card-text" id="priceProd">${producto.price}</p>
        <button data-id="${producto.id}" class="btn btn-primary agregar-carrito">Agregar</button>
      </div>
    </div>
  </div>`;
});

listaProductos.innerHTML = acumulador;

//Agregar al carrito recibe el evento de click con sus datos
function agregarAlCarrito(e) {
  e.preventDefault();

  // Se localiza el click:
  if (e.target.classList.contains("agregar-carrito")) {
    /** Se guarda dentro de producto seleccionado la card:
     *  .target para saber donde se encuentra
     *  .parentNode para acceder a la card completa (suponiendo que hay un solo nivel, sino agregar otro .parentNode)
     */
    const productoSeleccionado = e.target.parentNode;
    console.log(productoSeleccionado);

    //Pasa el producto a obtenerDatos()
    //obtenerDatos(productoSeleccionado);
    obtenerDatos(productoSeleccionado);
  }
}
function obtenerDatos(productoCard) {
  //Se construye el objeto para guardarlo posteriormente en un array (carrito, o etc)
  const datosProducto = {
    nombre: productoCard.querySelector("#descriptionProd").textContent,
    modelo: productoCard.querySelector("#modelProd").textContent,
    stock: productoCard.querySelector("#stockProd").textContent,
    price: productoCard.querySelector("#priceProd").textContent
    //Si tiene imagen sería accediento al atributo '.src':
    //img: productoCard.querySelector("#img").src
  };
  //Veamos que guardamos:
  console.log(datosProducto);

  //Validemos si el producto ya existe (tarea), y pusheamos al carrito:
  carrito.push(datosProducto);
  console.log(carrito);
}

// Se agrega un listener y llama a la funcion agregarAlCarrito (Ctrl + Click para ir a funcion)
//Validación si existe el elemento para agregar el listener
if (listaProductos) {
  listaProductos.addEventListener("click", agregarAlCarrito);
}
//-------------------------------------------------------------------------------------------------------------------------
//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta http-equiv="X-UA-Compatible" content="IE=edge">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>
//
//    <!-- Local CSS -->
//    <link rel="stylesheet" href="./styles/style.css">
//</head>
//<body>
//    <h1>Hola Grupo</h1>
//    <form>
//        <label for="nombre">Nombre: </label>
//        <input type="text" name="nombre" id="nombre" placeholder="Nombre">
//        <label for="edad">Edad: </label> 
//        <input type="number" name="edad" id="edad" placeholder="Edad" oninput="validarEdad()">
//        <label for="mail">Mail: </label>
//        <input type="text" name="mail" id="mail" placeholder="Mail">
//        <label for="telefono">Telefono: </label>
//        <input type="number" name="telefono" id="telefono" placeholder="Telefono">
//        <!-- <input type="submit" value="Validar Datos"> -->
//    </form>
//    <button onclick="mostrarDatos()">Validar</button>
//
//     Local JS --></input>
//    <script src="./js/main.js"></script>
//</body>
//</html>;

function validarEdad(){
    let edad = document.getElementById('edad').value;
    if (edad >= 18){
        console.log("Es mayor de edad")
    } else {
        console.log("Es menor de edad")
    }
}

function mostrarDatos(){
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let mail = document.getElementById('mail').value;
    let telefono = document.getElementById('telefono').value;

    console.log(nombre, edad, mail, telefono)

    let valores = {
        nombre: nombre,
        edad: edad,
        mail: mail,
        telefono: telefono,
     }
     console.log(valores);
}
//html---------------------------------------------------------------------------------------------------------
//
//<form id="formulario">
//     <label for="nombre">Nombre:</label><br>
//     <input type="text" id="nombre" name="nombre"><br>
//     <label for="edad">Edad:</label><br>
//     <input type="text" id="edad" name="edad"><br>
//     <label for="email">Email:</label><br>
//     <input type="text" id="email" name="email"><br>
//     <label for="telefono">Tel:</label><br>
//     <input type="text" id="telefono" name="telefono"><br>
//     <button type="button" onclick="capturar()">Enviar</button>
//   </form> 
//
const capturar = () => {
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    
    if (edad >= 18 && telefono.length == 8) {
      let datos = {nombre: nombre,
                edad: edad,
                email: email,
                telefono: telefono}
    
      console.log(JSON.stringify(datos))
    } else {
      console.log("Los datos no son válidos. Por favor, vuelva a cargar el formulario.")
    }
  }