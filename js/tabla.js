let acumuladorDietas=``;

let traerDatos = function () {
    let dietasrecibidas = JSON.parse(localStorage.getItem('dietas'));
console.log(dietasrecibidas);
    if (dietasrecibidas[0].area = "Pediatria"){
        console.log("Area elegida: " + dietasrecibidas[0].area);
        console.log("Dieta selccionada: " + dietasrecibidas[0].dietaseleccionada)
    }
};