let selectProv = document.getElementById("selectProv")
let selectMuni = document.getElementById("selectMuni")
let selectLocal = document.getElementById("selectLocal")

function provincia(){
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let opProv = `<option value="Provincia">Elegi tu provincia</option>`

        json.provincias.forEach(element => opProv += `<option value="${element.nombre}">${element.nombre}</option>`);

        selectProv.innerHTML = opProv
    })
    .catch(error =>{
        let msj = error.statusText || "Hubo un error de API";
        selectProv.nextElementSibling.innerHTML = `* Error: ${error.status}: ${msj} API *`
    })
}

provincia()

function municipio(prov){
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${prov}&orden=nombre&max=100`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let opMuni = `<option value="Municipio">Elegi tu municipio</option>`

        json.municipios.forEach(element => opMuni += `<option value="${element.id}">${element.nombre}</option>`);

        selectMuni.innerHTML = opMuni
    })
    .catch(error =>{
        let msj = error.statusText || "Hubo un error";
        selectMuni.nextElementSibling.innerHTML = `* Error: ${error.status}: ${msj} API *`
    })
}

selectProv.addEventListener("change", e => {
    municipio(e.target.value)
    console.log(e.target.value)
})

function localidad(muni){
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?municipio=${muni}&orden=nombre&max=100`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        let opLocal = `<option value="Localidad">Elegí tu localidad</option>`

        json.localidades.forEach(element => opLocal += `<option value="${element.id}">${element.nombre}</option>`);

        selectLocal.innerHTML = opLocal
    })
    .catch(error =>{
        let msj = error.statusText || "Hubo un error";
        selectLocal.nextElementSibling.innerHTML = `* Error: ${error.status}: ${msj} API *`
    })
}

selectMuni.addEventListener("change", e => {
    localidad(e.target.value)
    console.log(e.target.value)
})
