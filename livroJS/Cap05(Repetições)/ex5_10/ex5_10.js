// Criar programa calculo de parcelas

const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor R$: ")); // le valor do carne
const num  = Number(prompt("Numero de parcelas:")); // le numero de parcelas

const valorParcelas = Math.floor(valor / num); // calcula valor da parcela
const valorFinal = valorParcelas  + (valor % num); // calcula valor da ultima parcela

for (let i = 1; i < num; i++) { //enquanto i for menor que o numero de parcelas
    console.log(`${i} parcela: R$ ${valorParcelas.toFixed(2)}`); // mostra o valor das parcelas
}
console.log(`${num} parcela: R$ ${valorFinal.toFixed(2)}`); // mostra o valor da ultima parcela
