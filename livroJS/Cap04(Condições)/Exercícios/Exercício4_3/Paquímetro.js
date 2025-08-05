// Faz referência aos elementos do documento

const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

//cria ouvinte de eventos

frm.addEventListener("submit", (e) =>{

    //evita envio do formulário
    e.preventDefault()

    const valor = Number(frm.inValor.value) //recebe valor do formulário
    let tempo  //cria variavel para identificar o tempo permitido
    let troco
    if (valor <= 0.99) {
        tempo = "Valor insuficiente"
        troco = "0"
    } else if (valor >= 1.00 & valor < 1.75){
        tempo = "30"
        troco = valor % 1.00
    } else if (valor >= 1.75 & valor <= 2.99){
        tempo = "60"
        troco = valor % 1.75
    } else{
        tempo = "120"
        troco = valor % 3.00
    }
    resp1.innerText = `tempo: ${tempo}`
    resp2.innerText = `Troco R$: ${troco.toFixed(2)}`

})

 