/* Criar um progama que seja capaz de:
1 -- Ler o salário de um funcionário
2 -- O tempo(em anos) de empresa do funcionário
A cada 4 anos(quadrênios) o funcionário recebe um aumento de 1% no salário.
3 -- Mostrar a quantidade de quadrênios do funcionário
4 -- Mostrar o sário com o ajuste de aumento do funcionário
*/
const prompt = require("prompt-sync")()
const salarioI = Number(prompt("Qual o seu salário atual?"))
const tempoE = Number(prompt("Qual o seu tempo de empresa(em anos)?"))
const quad = Math.floor(tempoE/4)
const acrecimo = (salarioI * quad) / 100
const salarioF = salarioI + acrecimo 
console.log(`Quadrênios: ${quad}`)
console.log(`Salário Final R$: ${salarioF.toFixed(2)}`)
