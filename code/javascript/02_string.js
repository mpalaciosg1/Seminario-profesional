//trabajar con navegador, consola chrome
var nombre = "miguel"
var apellido = "palacios"

var nombreMayusculas = nombre.toUpperCase()
var apellidoMayusculas = apellido.toUpperCase()

console.log(nombreMayusculas + ' ' + apellidoMayusculas)
console.log( `${nombre} ${apellidoMayusculas}` )


var primeraletranombre = nombre.charAt(0)
var longitudnombre = nombre.length
var subcadenanombre = nombre.substr(1, 6)

console.log(primeraletranombre)
console.log(longitudnombre)
console.log(subcadenanombre)