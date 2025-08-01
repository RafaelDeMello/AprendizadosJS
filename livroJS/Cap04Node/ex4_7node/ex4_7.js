const prompt = require("prompt-async")() //adiciona o pacote promt-sync
const pessoas = Number(prompt("N de pessoas: ")) //le os dados
const peixes = Number(prompt("N de peixes"))

let pagar //declara a variavel
if (peixes <= pessoas){ //se o numero de pessoas maior que peixes
    pagar = pessoas * 20 // se nao houver peixes extras
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12) //se houver peixes extras
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)//exibe o valor a pagar