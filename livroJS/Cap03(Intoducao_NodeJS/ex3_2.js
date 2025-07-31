const prompt = require("prompt-sync")()// adiona o pacote ao progama
const veiculo = prompt("Veiculo: ")// le os dados de entrada
const preco = Number(prompt("Preco R$:"))
const entrada = preco * 0.50 // calcula o valor da entrada 
const parcela = entrada / 12 // ... e das parcelas
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
