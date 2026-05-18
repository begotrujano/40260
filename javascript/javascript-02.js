let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
let prm1 = null
let operacion = ""
let nuevoNumero = false

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores") 
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", pintar2)
    }
}

function pintar(e){
    if (nuevoNumero) {
        resultado.value = ""
        nuevoNumero = false
    }
    resultado.value += e.target.innerText
}

function pintar2(e){
    let signo = e.target.innerText
    
    if (signo == "C") {
        resultado.value = ""
        prm1 = null
        operacion = ""
        return
    }

    if (prm1 === null) {
        prm1 = resultado.value
    } else if (operacion) {
        igual()
        prm1 = resultado.value
    }

    if (signo == "=") {
        prm1 = null
        operacion = ""
    } else {
        operacion = signo
        nuevoNumero = true
    }
}

function igual(){
    let n1 = parseFloat(prm1)
    let n2 = parseFloat(resultado.value)
    let final = 0

    if (operacion == "+") final = n1 + n2
    if (operacion == "-") final = n1 - n2
    if (operacion == "x") final = n1 * n2
    if (operacion == "/") final = n1 / n2

    resultado.value = final
}