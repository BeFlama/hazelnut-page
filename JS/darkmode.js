let btnDark = document.getElementById("btnDarkMode")

btnDark.addEventListener(("click"),()=>{
    document.body.classList.toggle('darkMode');
    btnDark.classList.toggle('active')
	console.log("funciona boton oscuro")
    localStorage.setItem("darkMode", true)
})

let modoOscuro = localStorage.getItem("darkMode")

if(modoOscuro == "true"){
    document.body.classList.add("darkMode")
}