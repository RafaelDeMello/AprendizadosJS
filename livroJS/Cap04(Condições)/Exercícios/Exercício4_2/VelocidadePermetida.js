const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const velP = Number(frm.inVelocidadeP.value)
    const velC = Number(frm.inVelocidadeC.value)
    
    let multa
    if (velC > velP && velC <= velP +(velP * 0.20)){
        multa = "Leve"
    } else if (velC > velP +(velP * 0.20)){
        multa = "grave"
    } else {
        multa = "Sem multa"
    }
    resp.innerText = `Situação multa: ${multa}`
})