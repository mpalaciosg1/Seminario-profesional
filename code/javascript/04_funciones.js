var nombreapellido = "miguel palacios"

var edad = 37

//funcion tipo declarativa
function imprimiredad (nombre,edad){

    console.log(`${nombre} tiene la edad de ${edad}.`)
}

//funcion flecha
var imprimiredadflecha = (nombre,edad) => {
    console.log(`${nombre} tiene la edad de ${edad}.`) 
}

//funcion expresiva
var imprimiredadexpresiva = function(nombre,edad){
    console.log(`${nombre} tiene la edad de ${edad}.`) 
}

imprimiredad(nombreapellido,edad)
imprimiredadexpresiva(nombreapellido,edad)
imprimiredadflecha(nombreapellido,edad)