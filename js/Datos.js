//function send() {
//    var cama = document.getElementById('cama').value;
//    var nombre = document.getElementById('nombre').value;
//    var apellido = document.getElementById('apelido').value;
//    var dieta = document.getElementById('dieta').value;
//
//console.log ("nombre+edad")
//    var resultado = cama+nombre+apellido+dieta;
//    console.log(resultado);
//}
//let nombreingresado=prompt("ingrese su nombre")


//let nombre = prompt("ingresar nombre");
//if (nombre == "")
//    alert("Ingrese el nombre del paciente");
//    let apellido = prompt("ingresar apellido");
//if (apellido == "")
//    alert("Ingrese el nombre del paciente");
//let cama = prompt("ingresar nº de cama");
//console.log ("El paciente " + nombre + apellido +" se hubica en la cama nº " + cama);


function ObtenerDatos(){
    var nombre = document.getElementById('nombre').Value;
    var edad = parseFloat(document.getElementById('edad').Value);
    console.log(edad);
    console.log(nombre)
    document.registro.nombreobtenido.value = nombre;
    document.registo.edadobtenida.value = edad;
    
}