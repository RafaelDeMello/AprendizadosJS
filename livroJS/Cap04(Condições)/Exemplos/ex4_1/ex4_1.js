/* Construir um exemplo de uso das condições e operadores relacionais onde o progama faça a leitura do nome e de duas notas e calcule a média do aluno. Logo em seguida mostre na tela se p aluno está aprovado com a mensagem de 'Parabéns ... você foi aprovado!(a)' ou, então, 'Ops.. Você fpo reprovado(a)' */

//Cria referencia ao documento e aos elementos de resposta do programa 

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um ouvinte de evento, acionado quando o botão submit for clicado.

frm.addEventListener("submit", e => {
    e.preventDefault() //evita envio do form
    const nome = frm.inNome.value //obtem os valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2) / 2 //calcula a média
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`


//cria as condições

if (media >= 7) {
    resp2.innerText = `Parabéns ${nome}, você foi aprovado(a)!`
    resp2.style.color = "blue"
} else if (media >= 4) {
    resp2.innerText = `Atenção ${nome}, você está em exame.`
    resp2.style.color = "yellow"
} else {
    resp2.innerText = `Atenção ${nome}, você está reprovado(a).`
    resp2.style.color = "red"
}
})