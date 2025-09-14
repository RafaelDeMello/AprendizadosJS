// Ler número da fruta
// Repetir o nome da fruta com base no número informado utilizando * para separar

//Coletar elementos da página
const frm = document.querySelector("form")
const resp= document.getElementById("outResp")

//Adicionar evento ao input "Repetir Fruta"

frm.addEventListener("submit", (e) => {
    e.preventDefault() //Evitar envio do formulário

    //Obter dados do formulário
    const fruta = frm.inFruta.value //Nome da fruta
    const num = Number(frm.inNum.value) // Número de repetições
    let resposta = "" //variavel string vazia
    
    //Lógica de repetição
    for (let i = 1; i <= num; i++) {
        if (i == num){
            resposta += fruta //sem o asterisco no final
        } else {
            resposta += fruta + " * " //com o asterisco no final
        }
    }
    resp.innerText = resposta //exibir respost
})

