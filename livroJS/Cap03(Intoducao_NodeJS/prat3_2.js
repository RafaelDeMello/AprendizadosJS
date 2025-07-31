/* Elaborar um progama que:
1 -- leia o peso de uma racao em kg
2 -- leia o quanto um gato consome por dia em g(gramas)
3 -- Informar quantos dias irá durar e o quanto sobra da ração
*/
const prompt = require("prompt-sync")()
const pesokg = Number(prompt("Peso da ração(kg): "))
const qtg = Number(prompt("Consumo diário(g): "))
const pesogr = pesokg * 1000
const dias = Math.floor(pesogr/ qtg)
const resto = pesogr % qtg

console.log (`Duração: ${dias} dias`)
console.log (`Sóbra: ${resto}gr`)