let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
let prm1 = 0
let operacion = ""

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
    resultado.value += e.target.innerText
}

function pintar2(e){
    let signo = e.target.innerText
    if (signo == "C") {
        resultado.value = ""
        prm1 = 0
        operacion = ""
    } else if (signo == "=") {
        igual()
    } else {
        prm1 = resultado.value
        operacion = signo
        resultado.value = ""
    }
}

function igual(){
    let prm2 = resultado.value
    let final = 0
    let n1 = parseFloat(prm1)
    let n2 = parseFloat(prm2)

    if (operacion == "+") final = n1 + n2
    if (operacion == "-") final = n1 - n2
    if (operacion == "x") final = n1 * n2
    if (operacion == "/") final = n1 / n2

    resultado.value = final
}