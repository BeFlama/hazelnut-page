/* elemtnos del html */
let divdeposito = document.getElementById("deposito")
let inputSearch = document.getElementById("inputSearch")
let btnOrder = document.getElementById("btnOrder")
let btnCarr = document.getElementById("btnCarr")
let precioTotal = document.getElementById("precioTotal")

/* let bodyCarrito = document.getElementsById("bodyCarrito") */


abrirDeposito(deposito)

/* STORAGE CARRITO */
let carritoCompra

if(localStorage.getItem("carrito")){
    carritoCompra = JSON.parse(localStorage.getItem("carrito"))
}else{
    carritoCompra = []
    localStorage.setItem("carrito", carritoCompra)
}


/* DOM */
function abrirDeposito(array){
    for(let mueble of array){
        let divMueble = document.createElement("div")
        
        divMueble.innerHTML = `
    
        <div class="card_prod-img" id=${mueble.id}>
            <img src="../assets/img/imgprod/${mueble.imagen}" alt="${mueble.tipo}/${mueble.nombre}">
        </div>
        <div class="card_prod-text">
            <h5>${mueble.tipo} - ${mueble.nombre}</h5>
            <p><a href="#">Detalles del producto</a></p>
            <strong>$${mueble.precio}</strong>
            <button id="agregarBtn${mueble.id}">Comprar</button>
        </div>
    
        `
        divdeposito.appendChild(divMueble)
        let agregarBtn = document.getElementById(`agregarBtn${mueble.id}`)
        console.log(agregarBtn)
        agregarBtn.onclick = ()=>{
            agregarAlCarrito(mueble)
        }
    }
}

/* carrito de compras */

function agregarAlCarrito(mueble){
    console.log(`el producto ${mueble.tipo} - ${mueble.nombre} se agregó`)
    carritoCompra.push(mueble)
    localStorage.setItem("carrito", JSON.stringify(carritoCompra))
    console.log(carritoCompra)
} 

function cargarProducto(array){
    console.log("funciona el carrito")
    bodyCarrito.innerHTML = ""
    array.forEach((prodCarrito)=>{
        console.log(prodCarrito.nombre)
        bodyCarrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;" id="cardProd${prodCarrito.id}">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/img/imgprod/${prodCarrito.imagen}" class="img-fluid rounded-start" height = "20px" alt="${prodCarrito.tipo} ${prodCarrito.nombre}">
                </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${prodCarrito.tipo} ${prodCarrito.nombre}</h5>
            <strong>$${prodCarrito.precio}</strong>
                <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-primary" type="button">Modificar</button>
                <button class="btn btn-primary" id= "supr${prodCarrito.id}" type="button">Eliminar</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    `
    })
    array.forEach((prodCarrito)=>{
        document.getElementById(`supr${prodCarrito.id}`).addEventListener("click", ()=>{
            let cardProd = document.getElementById(`cardProd${prodCarrito.id}`)
            cardProd.remove()

            let prodEliminar = array.find(mueble => mueble.id == prodCarrito.id)
            console.log(prodEliminar)

            let posicion = array.indexOf(prodEliminar)
            console.log(posicion)

            array.splice(posicion, 1)
            console.log(array)

            localStorage.setItem("carrito", JSON.stringify(array))

            compraTotal(array)
        })
    })
    compraTotal(array)
}

function compraTotal(array){
    let total = array.reduce((acc, prodCarrito)=> acc + prodCarrito.precio , 0)
    console.log("precio total" + total)
    total == 0 ?
    precioTotal.innerHTML = `Todavia no agregaste ningun producto` :
    precioTotal.innerHTML = `El total de tu compra es <strong>$${total}</strong>`
    return total
}

/* busqueda */

function buscarProd(buscado, array){
    let busquedaArray = array.filter(
        (mueble) => mueble.tipo.toLocaleLowerCase().includes(buscado.toLowerCase()) || mueble.nombre.toLocaleLowerCase().includes(buscado.toLowerCase())
    )

    busquedaArray.length == 0 ? 
    (divdeposito.innerHTML = `<h3 class="prod404" >No encontramos lo que buscas</h3>`, 
    abrirDeposito(busquedaArray))
    : (divdeposito.innerHTML = "", abrirDeposito(busquedaArray))
}

//EVENTOS
btnCarr.addEventListener("click", ()=>{
    cargarProducto(carritoCompra)
})

inputSearch.addEventListener("input", ()=>{
    buscarProd(inputSearch.value.toLowerCase(), deposito)
})




/* function cuotasTres(){
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
} */


/* function ordenar(array){
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
} */

/* 5 */
/* function reciclarMueble(array){
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
} */




