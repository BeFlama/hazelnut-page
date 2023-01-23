/* primer entrega del curso js:

let salirMenu = true
do{
let opcionMenu = prompt(`Ingrese su metodo de pago requerido
1 - 3 cuotas sin interes
2 - 6 cuotas sin interes
3 - Efectivo o transferencia con descuento del 15%
4 - Otra cantidad de cuotas con interés +20%
5 - Salir del menú`)

switch(opcionMenu){
    case "1":
        let monto = parseInt(prompt(`Ingrese valor del producto en pesos`))
        console.log(monto)
        let precioFinal = monto / 3
        alert(`El producto de ${monto} pesos queda en 3 cuotas de ${precioFinal} pesos`)
    break
    case "2":
        let monto6 = parseInt(prompt(`Ingrese valor del producto en pesos`))
        console.log(monto6)
        let precioFinal6 = monto6 / 6
        alert(`El producto de ${monto6} pesos queda en 6 cuotas de ${precioFinal6} pesos`)
    break
    case "3":
        let montoef = parseInt(prompt(`Ingrese valor del producto en pesos`))
        console.log(montoef)
        let precioef = (montoef - (montoef * 15 / 100))
        alert(`El producto de ${montoef} pesos, en efectivo o transferencia costaria ${precioef}`)
    break
    case "4":
        let montoint = parseInt(prompt(`Ingrese valor del producto en pesos`))
        console.log(montoint)
        let cuotas = parseInt(prompt(`Ingrese la cantidad de cuotas deseada`))
        console.log(cuotas)
        let precioint = (montoint + (montoint * 20 / 100)) * cuotas
        let cuotasint = (precioint / cuotas)
        alert(`El producto de ${montoint} pesos, quedaria en ${cuotas} cuotas de ${cuotasint}, siendo su precio final ${precioint} pesos, carisimo, no te conviene :(`)
    break
    case "5":
        alert("El menú se cerró")
        salirMenu=false
    break
    default:
        alert("Opción NO válida")
    break
}
}while(salirMenu) */


