//se puede usar : como un igual??, let que diferencia tiene de var??
let estudiante = {
    nombres: "Migue Alexander",
    apellidos: "palacios guzman",
    correo: "asd@asd.com",
    peso: 150,
}

//CONST para constantes, se usan en mayusculas por convencion
const INCREMENTAR_PESO = 3
const DECREMENTAR_PESO = 2
const META = estudiante.peso - 10

const aumentarPeso = (objeto) => objeto.peso += INCREMENTAR_PESO
const aumentarPeso = (objeto) => objeto.peso -= DECREMENTAR_PESO

const comeMucho = () => Math.random() <0.6
const realizaDeporte = () => Math.random() < 0.3  

console.log(`Al inicio del año ${estudiante.nombres} pesa ${estudiante.peso}`)

while (estudiante.peso > META) {
    if(comeMucho()){
        aumentarPeso(estudiante)
    }
    if (realizaDeporte()) {
        disminuyePeso(estudiante)
    }
}

console.log(`Al final del año ${estudiante.nombres} pesa ${estudiante.peso}`)