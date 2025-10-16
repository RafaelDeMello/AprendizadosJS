//Ordenar arrays ao contrário

const vetor = [1, 5, 4, 7]
const vetorAoC = []

let j = 0
for(let i = vetor.length -1; i >= 0; i--){
     vetorAoC[j] = vetor[i]
     j++
}

console.log(vetorAoC)