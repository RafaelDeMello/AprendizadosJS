const prompt = require("prompt-async")() //  adiciona o pacote prompt-async
const numero = Number(prompt("Digite um número(centena): "))
if (numero < 100 || numero >= 1000) {
    console.log(`Erro... deve ser centena`)
    return
}
const num1 = Math.floor(numero / 100) ///obtem o primeiro número
const sobra = numero % 100 //o que sobra (dezena)
const num2 = Math.floor(sobra/10)// obtem o segundo numero(dezena)
const num3 = sobra % 10 //obtem o 3 numero
console.log(`Ivertido ${num3}${num2}${num1}`) //exibe o número invertido