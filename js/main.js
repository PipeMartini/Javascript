class Dieta {
    constructor (area, subarea, ncama, pnombre, papellido, dietaseleccionada, descartable){
        this.area = area;
        this.subarea = subarea;
        this.ncama = ncama;
        this.pnombre = pnombre;
        this.papellido = papellido;
        this.dietaseleccionada = dietaseleccionada;
        this.descartable = descartable;
    }
}

let dietas=[]

let recolector = function() {

let area = document.getElementById("Areas").textContent;
let subarea = document.getElementById("SubAreas").value;
let cama = document.getElementById("Ncamas").value;
let nombre = document.getElementById("PacienteNombre").value;
let apellido = document.getElementById("PacienteApellido").value;
let dieta = document.getElementById("SeleccionDieta").value;
let descartable = document.getElementById("descartable").checked;
dietas.push(new Dieta (area, subarea, cama, nombre, apellido, dieta, descartable));
localStorage.setItem("dietas",JSON.stringify(dietas));
console.log("Area: "+ area + "    Subarea:"+ subarea + "    n° de cama: " + cama +"    Nombre y apellido: "+ nombre +" "+ apellido + "    Tipo de dieta: " + dieta + "    Descartable: "+ descartable);
//localStorage.setItem ("dietas", JSON.stringify(dietas));
//localStorage.setItem ("Area", JSON.stringify(area));
//localStorage.setItem ("Subarea", JSON.stringify(subarea));
//localStorage.setItem ("Cama", JSON.stringify(cama));
//localStorage.setItem ("nombre", JSON.stringify(nombre));
//localStorage.setItem ("apellido", JSON.stringify(apellido));
//localStorage.setItem ("dieta", JSON.stringify(dieta));
//localStorage.setItem ("descartable", JSON.stringify(descartable));
}

//----------------------------------------------------------------------------------------------------------------------
//tengo que llamar los elementos e imprimirlos en las tablas. una de las tablas solo tiene que juntar los datos.
// la otra tabla tiene que ir sumando los datos totales. una

