//Criar progama que mostre se o número é par ou ímpar

//Cria referencia aos elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria ouvinte de eventos
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const numero = Number(frm.inNumero.value)
    let resultado 
    if (numero % 2 == 0) {
        resultado = "par"
    } else {
        resultado = "ímpar"
    }

    resp.innerText = `${numero} é ${resultado}`
})

