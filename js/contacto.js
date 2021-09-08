document.getElementById('enviarContacto').onclick = enviarContacto;

function enviarContacto () {
   console.log("pium piuuuuum")
   let imputNyA = document.getElementById ('imputNyA').value;
   let imputTel = document.getElementById ('imputTel').value;
   let imputEmail = document.getElementById ('imputEmail').value;
   let imputCiudad = document.getElementById ('imputCiudad').value;
   //let imputTexto = document.getElementById ('imputTexto').value;

   alert("Muchas gracias " + imputNyA + " de " + imputCiudad + ". ya recibimos tus datos de contacto, pronto estaremos enviando una respuesta a: "
   + imputEmail + " o a tu telefono: " + imputTel)
}