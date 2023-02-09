class Mueble {
    constructor(id, tipo, nombre, precio, imagen, cantidad){
        this.id = id,
        this.tipo = tipo,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = cantidad

    }
    mostrarMueble(){
        console.log(`El ${this.tipo} de nombre ${this.nombre} vale ${this.precio} pesos`)
    }
}

const Mueble1 = new Mueble (1, "Luz", "Momo", 10000, "ilu1.jpg", 1)
const Mueble2 = new Mueble (2, "Luz", "Apa", 12000, "ilu2.jpg", 1)
const Mueble3 = new Mueble (3, "Luz", "Azula", 8000, "ilu3.jpg", 1)
const Mueble4 = new Mueble (4, "Luz", "Iroh", 11000, "ilu4.jpg", 1)
const Mueble5 = new Mueble (5, "Organizador", "Aang", 14000, "org1.jpg", 1)
const Mueble6 = new Mueble (6, "Organizador", "Katara", 16000, "org2.jpg", 1)
const Mueble7 = new Mueble (7, "Escritorio", "Toph", 18000, "escr1.jpg", 1)
const Mueble8 = new Mueble (8, "Escritorio", "Zoka", 20000, "escr2.jpg", 1)
const Mueble9 = new Mueble (9, "Organizador", "Zuko", 5000, "org3.jpg", 1)
const Mueble10 = new Mueble (10, "Escritorio", "Nach", 30000, "escr3.jpg", 1)

const deposito = []
deposito.push(Mueble1, Mueble2, Mueble3, Mueble4, Mueble5, Mueble6, Mueble7, Mueble8, Mueble9, Mueble10)
