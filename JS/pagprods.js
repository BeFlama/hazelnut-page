/* elemtnos del html */
let divdeposito = document.getElementById("deposito")

let loader = document.getElementById("loader")
//nav de la pagina
let inputSearch = document.getElementById("inputSearch")
let busqueda = document.getElementById("busqueda")
let selectOrden = document.getElementById("selectOrden")

//carrito
let bodyCarrito = document.getElementById("bodyCarrito")
let btnCarr = document.getElementById("btnCarr")
let cantidadCarrito = document.getElementById("cantidadCarrito")
let precioTotal = document.getElementById("precioTotal")
let btnContCompra = document.getElementById("btnContCompra")
let btnVaciarCarrito = document.getElementById("btnVaciarCompra")
let btnFinish = document.getElementById("btnFinish")


/* STORAGE CARRITO */
let carritoCompra
if(localStorage.getItem("carrito")){
    carritoCompra = JSON.parse(localStorage.getItem("carrito"))
}else{
    carritoCompra = []
    localStorage.setItem("carrito", carritoCompra)
}


//functions
function abrirDeposito(array){
    divdeposito.innerHTML = ""
    for(let mueble of array){
        let divMueble = document.createElement("div")
        
        divMueble.innerHTML = `
        <div class="card_prod-img" id=${mueble.id}>
            <img src="../assets/img/imgprod/${mueble.imagen}" alt="${mueble.tipo}/${mueble.nombre}">
        </div>
        <div class="card_prod-text">
            <h5>${mueble.tipo} - ${mueble.nombre}</h5>
            <p><a href="#">Detalles del producto</a></p>
            <p id= "${mueble.cantidad}"></p>
            <strong>$${mueble.precio}</strong>
            <button id="agregarBtn${mueble.id}">Comprar</button>
        </div>
    
        `
        divdeposito.appendChild(divMueble)
        let agregarBtn = document.getElementById(`agregarBtn${mueble.id}`)
        console.log(agregarBtn)
        agregarBtn.onclick = ()=>{
            agregarAlCarrito(mueble)
            mostrar()
        }
    }
}

/* carrito de compras */
function ocultar(){
    document.getElementById("footerCarrito").style.display = 'none'
}
function mostrar(){
    document.getElementById("footerCarrito").style.display = 'block'
}


function cargarProducto(array){
    bodyCarrito.innerHTML = ""
    array.forEach((prodCarrito)=>{

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
                <button class="btn btn-dark" type="button" id="cantidadCarrito">${prodCarrito.cantidad}</button>
                <button class="btn btn-dark" id= "supr${prodCarrito.id}" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"          fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
                </div>
            </div>
            </div>
            </div>
        </div>
    `
    })
    array.forEach((prodCarrito)=>{
        document.getElementById(`supr${prodCarrito.id}`).addEventListener("click", ()=>{

            let prodEliminar = array.find(mueble => mueble.id == prodCarrito.id)
            prodEliminar.cantidad --

            if (prodCarrito.cantidad < 1 || prodCarrito.cantidad === 0){
                let cardProd = document.getElementById(`cardProd${prodCarrito.id}`)
                cardProd.remove()
                let posicion = array.indexOf(prodCarrito)
                array.splice(posicion, 1)
                localStorage.setItem("carrito", JSON.stringify(array))
                compraTotal(array)
            }else{
                localStorage.setItem("carrito", JSON.stringify(array))
            }
            cargarProducto(array)
        })

    })
    compraTotal(array)
}

function agregarAlCarrito(mueble){
    console.log(`el producto ${mueble.tipo} - ${mueble.nombre} se agregó`)
    let repeat = carritoCompra.some((repeatMueble) => repeatMueble.id === mueble.id)
    if(repeat){
        carritoCompra.map((prod) =>{
            if(prod.id === mueble.id){
            prod.cantidad++
        }
        Toastify({
            text: `Agregaste + 1 • ${mueble.tipo} - ${mueble.nombre} • al carrito`,
            duration: 2000,
            gravity: "top",
            position: "center",
            style: {
                background: "#986632",
                color: "white",
            }
        }).showToast()
        })
    }else{
        mueble.cantidad = 1
        carritoCompra.push(mueble)
        localStorage.setItem("carrito", JSON.stringify(carritoCompra))
        console.log(carritoCompra)
        Toastify({
            text: `Agregaste • ${mueble.tipo} - ${mueble.nombre} • al carrito`,
            duration: 2000,
            gravity: "top",
            position: "center",
            style: {
                background: "#986632",
                color: "white",
            }
        }).showToast()
    }
    console.log(carritoCompra)
    }
    

function compraTotal(array){
    let total = array.reduce((acc, prodCarrito)=> acc + (prodCarrito.precio*prodCarrito.cantidad) , 0)
    console.log("precio total" + total)
    total == 0 ? 
    precioTotal.innerHTML = `Todavia no agregaste ningun producto` : precioTotal.innerHTML = `El total de tu compra es <strong>$${total}</strong>`
    total == 0 ? ocultar() : mostrar()
    return total
}

function vaciarCarrito(array){
    let vacio = array.length = 0
    bodyCarrito.innerHTML = ""
    precioTotal.innerHTML = `Todavia no agregaste ningun producto` 
    localStorage.removeItem("carrito")
    ocultar()
    return vacio

}


/* busqueda */
function buscarProd(buscado, array){
    let busquedaArray = array.filter(
        (mueble) => mueble.tipo.toLocaleLowerCase().includes(buscado.toLowerCase()) || mueble.nombre.toLocaleLowerCase().includes(buscado.toLowerCase())
    )

    busquedaArray.length == 0 ? 
    (busqueda.innerHTML = `<h3 class="prod404">No encontramos lo que buscás</h3>`, 
    abrirDeposito(busquedaArray))
    : (busqueda.innerHTML = "", abrirDeposito(busquedaArray))
}

/* orden */
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((param1, param2)=> param1.precio - param2.precio)
    abrirDeposito(menorMayor)
}

function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    abrirDeposito(mayorMenor)
}

function ordenarAZ(array){
    const ordenadoAZ = [].concat(array)
    ordenadoAZ.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
            return 0
    })
    abrirDeposito(ordenadoAZ)
}

function ordenarTipo(array){
    const ordenTipo = [].concat(array)
    ordenTipo.sort((a, b)=>{
        if (a.tipo > b.tipo){
            return 1
        }
        if (a.tipo < b.tipo) {
            return -1
        }
            return 0
    })
    abrirDeposito(ordenTipo)
}


//EVENTOS
//barranav
inputSearch.addEventListener("input", ()=>{
    buscarProd(inputSearch.value.toLowerCase(), deposito)
}) 

btnCarr.addEventListener("click", ()=>{
    mostrar()
    cargarProducto(carritoCompra)
})

selectOrden.addEventListener("change", ()=>{
    console.log(selectOrden.value)
    if(selectOrden.value == "1"){
        ordenarMayorMenor(deposito)
    }else if(selectOrden.value =="2"){
        ordenarMenorMayor(deposito)
    }else if(selectOrden.value == "3"){
        ordenarAZ(deposito)
    }else if(selectOrden.value == "4"){
        ordenarTipo(deposito)
    }else{
        abrirDeposito(deposito)
    }
})


//carrito
btnFinish.addEventListener("click", ()=>{
    console.log("Compra realizada")
    Swal.fire({
        icon: 'success',
        title: '¡Muchas Gracias!',
        text: 'Tu compra fue realizada con éxito',
        showConfirmButton: false,
        timer: 3000
    })
    })

btnVaciarCarrito.addEventListener("click", () =>{
    vaciarCarrito(carritoCompra)
    Toastify({
        text: `Se vació el carrito`,
        duration: 1500,
        gravity: "top",
        position: "center",
        style: {
            background: "#986632",
            color: "white",
        }
    }).showToast()
})

//loader
setTimeout(()=>{
    loader.remove()
    abrirDeposito(deposito)
},1900)




