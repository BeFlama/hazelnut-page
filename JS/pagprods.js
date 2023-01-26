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
const Mueble3 = new Mueble (3, "Organizador", "Aang", 14000)
const Mueble4 = new Mueble (4, "Organizador", "Katara", 16000)
const Mueble5 = new Mueble (5, "Escritorio", "Toph", 18000)
const Mueble6 = new Mueble (6, "Escritorio", "Zoka", 20000)

const deposito = []
deposito.push(Mueble1, Mueble2, Mueble3, Mueble4, Mueble5, Mueble6)


function abrirDeposito(array){
    console.log(`Nuestro stock de muebles es el siguiente:`)
    for(let elemento of array){
        console.log(elemento.id, elemento.tipo, elemento.nombre, elemento.precio)
    }
}

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

/* function comprarMueble(array){
    console.log(Deposito)
    let muebleElegido = prompt(`Indique el nombre del mueble que desea comprar`)
} */



let salirMenu = true

do{
    let opcionMenu = prompt(`Ingrese su opcion requerida
    1 - Ver stock de muebles
    2 - Buscar muebles por categoría
    3 - Comprar mueble
    4 - Ordenar por precio
    5 - Salir del menú`)

    switch(opcionMenu){
        case "1":
            abrirDeposito(deposito)
        break
        
        case "2":
            buscarMueble(deposito)
        break

        case "3":

        break
        case "4":

        break
        case "5":
            alert("El menú se cerró")
            salirMenu=false
        break
        default:
            alert("Opción NO válida")
        break
}
}while(salirMenu)

/* function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
}

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese su opcion requerida:
        1 - Comprar mueble
        2 - Ver catálogo completo
        3 - Buscar mueble por tipo
        4 - Ver próximos lanzamientos
        5 - Salir del menú`))

        switch(opcionIngresada){
            case 1:
                comprarMueble()
            break

            case 2:
                abrirDeposito(Deposito)
            break

            case 3:
                buscarMueble(Deposito)
            break

            case 4:

            break

            case 5:
                console.log("El menú se cerró")
                salirMenu = true
                return salir
            break

            default:
                console.log("Opción NO válida")
            break
        }

} */



