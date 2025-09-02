// Obtém os elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Add um ouvinte de eventos
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio de formulário

    const numero = Number(frm.inNumero.value) // obtém o número digitado
    let resposta = `Entre ${numero} e 1: ` //string para mostrar a resposta
    for (let i = numero; i > 0; i - 1) {
        resposta = resposta + i + ","
    }
    resp.innerText = resposta // Exibe a resposta
})