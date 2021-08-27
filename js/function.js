//// estos objetos lo que hacen es decirme el nombre del producto, el precio y el stock que tenemos. 
//// Serviria para crear cards y que contengan esta informacion. 
////-------------------------------------------------------------------------> Canelon
//const camperaCanelon = {
//    name: "Camperas Canelon",
//    price: "14000$",//--------> precio del producto
//    stock: 10 ,   
//    talle:L , 
//}
//
//let acumulador = ``;
//for(let i = 0; i< 4; i++){
//    acumulador+= `<div>
//    <h3>${camperaCanelon.name}</h3>
//    <b>${camperaCanelon.price}</b>
//    <p>${camperaCanelon.stock}</p>
//    <p>${camperaCanelon.talle}</p>
//    <button> Comprar </button>
//    </div>`
//}
//document.write(acumulador);
////
//
//class campera {
//    constructor (modelo, precio, stock, talle) {
//        this.modelo = modelo || undefined;
//        this.precio = precio || undefined;
//        this.stock = stock || undefined; 
//        this.talle = talle || undefined;
//    }
//}
//const campera1 = new campera('pro', '17500$', '6', 'L');
//console.log (campera1);
//
//const campera2 = new campera('pro', '17500$', '3', 'S');
//console.log (campera2);
//
//const campera3 = new campera('abrigo', '16000$', '2', 'xL');
//console.log (campera3);
//
//////-------------------------------------------------------------------------> PRO
//const camperaPro = {
//    name: "Camperas PRO",
//    price: "17300$",//--------> precio del producto
//    stock: 6 ,
//    talle: "L" ,     
//}
//
//let acumuladorPRO = ``;
//for(let i = 0; i < 3; i++){
//    acumuladorPRO += `<div id=cards>
//    <h3>${camperaPro.name}</h3>
//    <b>${camperaPro.price}</b>
//    <p>${camperaPro.stock}</p>
//    <p>${camperaPro.talle}</p>
//    </div>`
//}
//validarStock(){
//}
//document.write(acumuladorPRO);


//-------------------------------------------------------------------------> Funcion campera NUEVA
function agregarProducto (){
    let confirmacion = confirm ('¿desea agregar nuevos productos?')
    console.log(confirmacion)
    if (confirmacion){
        let cantidad = prompt ('introduce la cantidad de productos que deseas agregar')
        for (let i = 0; i < cantidad; i++){
            let nombre= prompt ('ingrese el nombre del producto');
            let precio= prompt ('ingrese el precio del producto');
            let stock= prompt ('ingrese el stock del producto');
            let talle= prompt ('ingrese el tallee del producto');
            let tienda = new Producto (nombre, precio, stock, talle);
            console.log(tienda);
        }
    }else{
        console.log('usted escogio no agregar nuevos productos')
    }
}
agregarProducto();

const BasedeDatos = [agregarProducto.push];
console.log(BasedeDatos);
