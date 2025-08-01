const prompt = require("prompt-async")() //adicona o pacote prompt-sync
const valor = Number(prompt("Valor da Compra R$: ")) // le valor compra
const aux = Math.floor(valor/20) // aux = n de parcelas sem condicao
const parcelas = aux == o ? 1 : aux > 6 ? 6 : aux // operador ternário
const valorParcela = valor / parcelas //cálculos do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)