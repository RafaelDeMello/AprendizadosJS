// 1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos.
// Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7).\
// Imprima no console o array e também a informação de comprimento do array.

// const vetor = []
// vetor[1] = "a";
// vetor[3] = "b";
// vetor[7] = "c";
// console.log(vetor);
// console.log(vetor.length);

// for(letras of vetor) {
//     console.log(letras)
// }

const numeros = [1 ,3 ,4 ,2]
const ordenarC = [...numeros]

while(trocar = true){
    for (let i = 0; i < numeros.length - 1; i++){
        let temp = 0
        if (ordenarC[i] > ordenarC[i + 1]){
           temp = ordenarC[i]
           ordenarC[i] = ordenarC[i + 1]
           ordenarC[i + 1] = temp
           trocar = true
        }
    }
} 

console.log(numeros)
console.log(ordenarC)


