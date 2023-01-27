class Mueble {
    constructor(id, tipo, nombre, precio, imagen){
        this.id = id,
        this.tipo = tipo,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen

    }
    mostrarMueble(){
        console.log(`El ${this.tipo} de nombre ${this.nombre} vale ${this.precio} pesos`)
    }
}

const Mueble1 = new Mueble (1, "Luz", "Momo", 10000)
const Mueble2 = new Mueble (2, "Luz", "Apa", 12000)
const Mueble3 = new Mueble (3, "Luz", "Azula", 8000)
const Mueble4 = new Mueble (4, "Luz", "Iroh", 11000)
const Mueble5 = new Mueble (5, "Organizador", "Aang", 14000)
const Mueble6 = new Mueble (6, "Organizador", "Katara", 16000)
const Mueble7 = new Mueble (7, "Escritorio", "Toph", 18000)
const Mueble8 = new Mueble (8, "Escritorio", "Zoka", 20000)
const Mueble9 = new Mueble (9, "Organizador", "Zuko", 5000)
const Mueble10 = new Mueble (10, "Escritorio", "Nach", 30000)

const deposito = []
deposito.push(Mueble1, Mueble2, Mueble3, Mueble4, Mueble5, Mueble6, Mueble7, Mueble8, Mueble9, Mueble10)

/* 1 */
function abrirDeposito(array){
    console.log(`Nuestro stock de muebles es el siguiente:`)
    array.forEach(mueble => {
        console.log(mueble.id, mueble.tipo, mueble.nombre, mueble.precio)
        }
    )
}

/* 2 */
function buscarMueble(array){
    let muebleBuscado = prompt("Ingresa el tipo de mueble que buscas")
    let busquedaTipo = array.filter(
        (mueble)=> mueble.tipo.toLowerCase() == muebleBuscado.toLowerCase()
    )
    if(busquedaTipo.length == 0){
        console.log(`Disculpa, "${muebleBuscado}" no se encuentra en nuestro catálogo`)
    }else{
        console.log(`Para tu busqueda de "${muebleBuscado}"`)
        abrirDeposito(busquedaTipo)
    }
}

/* 3 */
function comprarMueble(){
/*     console.log(`A partir del cátalogo ingrese el id del mueble que desea comprar:`)
    for(let elem of array){
        console.log(`${elem.id} - ${elem.tipo} - ${elem.nombre} - ${elem.precio}`)
    }
    let idElegido = parseInt(prompt("ingrese el id "))

    const newArray = array.slice(idElegido, (idElegido + 1))

    for(let elem of newArray){
        console.log(`${elem.id} - ${elem.tipo} - ${elem.nombre} - ${elem.precio}`)
    } */
    let opcionBuy = parseInt(prompt(`
    1 - Ver stock
    2 - 3 cuotas sin interes
    3 - Quiero calculcar cuotas (+25% de interes)
    4 - Voy a pagar en efectivo o transferencia (10% de descuento)`))
    switch(opcionBuy){
        case 1:
            abrirDeposito(deposito)
        break
        case 2:
            cuotasTres()
        break
        case 3:
            calculcarCuotas()
        break
        case 4:
            calculcarDesc()
        break
        default:
            console.log(`${opcionBuy} no es valido`)
        break
    }
} 

function cuotasTres(){
    let precio = parseInt(prompt("Ingresa el precio del mueble que queres comprar"))
    let precioCuotas = (precio / 3)

    alert(`El precio final del mueble elgido es ${precio} en 3 cuotas de ${precioCuotas}`)
}

function calculcarCuotas(){
    let precioCalc = parseInt(prompt("Ingresa el precio del mueble que queres comprar"))
    let cuotasCalc = parseInt(prompt("En cuantas cuotas queres realizar la compra?"))

    let precioInt = (precioCalc + (precioCalc*(25/100)))
    let finalCalc = (precioInt / cuotasCalc)

    alert(`El precio final del mueble elegido de ${precioCalc} pesos, quedaria en ${cuotasCalc} de ${finalCalc}, siendo el total con intereses ${precioInt}`)
}

function calcularDesc(){
    let precioDesc = parseInt(prompt("Ingresa el precio del mueble que queres comprar"))
    let precioFinalDesc = (precioDesc - (precioDesc * (10 / 100)))

    alert(`el precio del mueble que elegiste es ${precioDesc} pesos, en efectivo o transferencia quedaria en ${precioFinalDesc} pesos`)
}

/* 4 */
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar por precio, mayor a menor
    2 - Ordenar por precio, menor a mayor`))
    switch(opcion){
        case 1:
            ordenarMayor(array)
        break
        case 2:
            ordenarMenor(array)
        break
        default:
            console.log(`${opcion} no es valido`)
        break
    }
}

function ordenarMayor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a, b)=> b.precio - a.precio)
    abrirDeposito(mayorMenor)
}

function ordenarMenor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((param1, param2)=> param1.precio - param2.precio)
    abrirDeposito(menorMayor)
}

/* 5 */
function reciclarMueble(array){
    let muebleIngresado = prompt(`Que tipo de mueble tenes?
    Recorda que solo aceptamos del tipo que vendemos`)

    if (muebleIngresado.toLocaleLowerCase() == "escritorio" 
    || muebleIngresado.toLowerCase() == "luz" 
    || (muebleIngresado.toLowerCase() == "organizador")) {
        console.log(`Perfecto, si aceptamos ${muebleIngresado} como tipo de mueble`)

        let mueblePrecio = parseInt(prompt("A que precio queres venderlo?"))
        let muebleNombre= prompt("Ahora decinos el nombre con el que quieras publicarlo: ")
    
        const nuevoMueble = new Mueble(array.length+1, muebleIngresado, muebleNombre, mueblePrecio)
        console.log(nuevoMueble)
    
        array.push(nuevoMueble)
        abrirDeposito(array)
        console.log("Gracias! agregamos tu mueble a nuestro stock")

    }else{
        console.log("Disculpa, no aceptamos este tipo de mueble")
    }
}

/* MENU INICIAL */

let salirMenu = true

do{
    let opcionMenu = prompt(`Ingrese su opcion requerida
    1 - Ver stock de muebles
    2 - Buscar muebles por categoría
    3 - Comprar mueble
    4 - Ordenar catalogo por precio
    5 - Quiero vender mi propio mueble
    6 - Salir del menú`)

    switch(opcionMenu){
        case "1":
            abrirDeposito(deposito)
        break

        case "2":
            buscarMueble(deposito)
        break

        case "3":
            comprarMueble(deposito)
        break

        case "4":
            ordenar(deposito)
        break

        case "5":
            reciclarMueble(deposito)
        break

        case "6":
            alert("El menú se cerró")
            salirMenu=false
        break

        default:
            alert("Opción NO válida")
        break
}
}while(salirMenu)




