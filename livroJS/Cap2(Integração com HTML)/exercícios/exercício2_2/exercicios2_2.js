// cria referencia ao elemento form e as saídas para a resposta no h2
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

// Criar o ouvinte de eventos a partir do momento que se clica no botão 'submit'

frm.addEventListener("submit", (e) =>{

    const valor = Number(frm.inValor.value) //coleta as informações do formulário
    const tempo = Number(frm.inTempo.value)
    
    const duracao = Math.ceil(tempo / 15)
    const total = duracao * valor

    resp1.innerText = `Valor a Pagar R$: ${total}`

    e.preventDefault()
})