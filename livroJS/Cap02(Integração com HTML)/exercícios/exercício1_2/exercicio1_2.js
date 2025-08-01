// cria referencia ao elemento form e as saídas para a resposta no h2
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// criar um ouvinte para ser acionado quando o botão 'submit' for clicado

frm.addEventListener("submit", (e) =>{

    const medicamento = frm.inMedicamento.value //Obetém os dados dos campos
    const preco = Number(frm.inPreco.value)

    const desconto = Math.floor(preco * 2)

    resp1.innerText = `Promoção de : ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()
       
})