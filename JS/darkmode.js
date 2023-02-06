let btnDark = document.getElementById("btnDarkMode")


if(localStorage.getItem("darkmode")){
    if(JSON.parse(localStorage.getItem("darkmode")) == true){
        console.log("funciona boton oscuro")
        document.body.classList.toggle('darkMode')
        btnDark.classList.toggle('active')
    }
}else{
    localStorage.setItem("darkmode", false)
}


btnDark.addEventListener(("click"),()=>{
    document.body.classList.toggle('darkMode')
    btnDark.classList.toggle('active')
    if(JSON.parse(localStorage.getItem("darkmode")) == false){
        localStorage.setItem("darkmode", true)
    }else{
        localStorage.setItem("darkmode", false)
    }
})