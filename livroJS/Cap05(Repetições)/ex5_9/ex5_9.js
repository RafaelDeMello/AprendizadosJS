// Programa de etiquetas node JS
const prompt = require("prompt-sync")();

const produto = prompt("Produto: ") // Le o o nome do produto
const num = Number(prompt("N de etiquetas: ")) // quantidade de etiquetas
// criA um laço para repetir a ação até num/2 (pois imprime 2 etiquetas por linha)
for (let i = 1; i <= num / 2 ; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`) // Imprime 2 etiquetas por linha
}
if (num % 2 == 1) { // se num for impar
    console.log(produto) // imprime mais uma etiqueta se num for impar
} 
