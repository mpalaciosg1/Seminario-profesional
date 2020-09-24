var yo1 = {
    nombre = "miguel",
    apellido = "palacios"
}

function imprimirNombreMayuscula(objeto){
    var {nombre} = objeto
    console.log(`${nombre.toUppperCase()} ${objeto.apellido}`)
}

function imprimirNombreMinuscula(objeto) {
    console.log( `${objeto.nombre.toLowerCase()} ${objeto.apellido}` )
}

function imprimirApellidoMayuscula( { apellido } ) {
    console.log( `${apellido.toUpperCase()}` )
}


imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )
imprimirApellidoMayuscula( docente2 )