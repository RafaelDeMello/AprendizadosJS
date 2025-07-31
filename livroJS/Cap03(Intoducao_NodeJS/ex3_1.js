const prompt = require("prompt-sync")() // ADICIONA PACOTE PARA A ENTRADA DE DADOS
const num1 = Number(prompt("1 Número: ")) // Le os números
const num2 = Number(prompt("2 Número: "))
const soma = num1 + num2   //cálcula a soma
console.log(`Soma é: ${soma}`) // Mostra o resultado
