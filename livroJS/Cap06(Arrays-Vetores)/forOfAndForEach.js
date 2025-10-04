const frutas = ["Maca", "banana", "laranja"]
/* for(const fruta of frutas){ //Método simples de percorrer os valores de um vetor
    console.log(frutas)
} */

/* frutas.forEach((fruta, i) => { //Método for each um pouco mais complexo e que abrange melhor os recursos
    console.log(`${i + 1} Fruta: ${fruta}`)
}) */

const numeros = [5, 10, 15 ,20]
let soma = 0
numeros.forEach(num => soma += num)
console.log(`A soma dos números é: ${soma}`)

