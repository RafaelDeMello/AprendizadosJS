// Cria referência  ao from e aos elementos de resposta(pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")


//cria um ouvinte de eventos acionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

    const veiculo = frm.inVeiculo.value //obtém os dados dos campos
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // calcula o valor da entrada
    const parcela = (preco * 0.50) / 12 // ... das parcelas

    resp1.innerText = `Promoção: ${veiculo}` // exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(0)}`
    resp3.innerText = `+12 de R$ ${parcela.toFixed(0)}`


    e.preventDefault() //Evita envio do formulario e reoload da página

} )