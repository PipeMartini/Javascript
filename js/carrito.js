function agregarAlCarrito (title) {
    const productoencontrado = productos.find(producto => producto.title === title);
    if (productoencontrado != undefinded){
        carrito.push(carritoencontrado);
    }else{
        alert ("algofallo");
    }
}