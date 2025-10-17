const vetor = [1, 3, 2, 4]
const vetorAoc = []
const vetorOD = [...vetor]
const vetorOC = [...vetor]

let temp = 0
let troca = true
let j = 0 //indice pora novos vetores

for (i = vetor.length - 1; i >= 0; i--){
     vetorAoc[j] = vetor[i]
     j++
}

while(troca){
     troca = false
     for(let i = 0; i < vetorOD.length - 1; i++){
        if(vetorOD[i] < vetorOD[i + 1]){
          temp = vetorOD[i]
          vetorOD[i] = vetorOD[i + 1]
          vetorOD[i + 1] = temp
          troca = true
        }
     }
}

do {
    troca = false
    for (let i = 0 ;i < vetorOC.length -1; i++){
     if(vetorOC[i] > vetorOC[i + 1]){
       temp = vetorOC[i]
       vetorOC[i] = vetorOC[i + 1]
       vetorOC[i + 1] = temp
       troca = true
     }
    }
} while(troca)

console.log(vetor)
console.log(vetorAoc)
console.log(vetorOD)
console.log(vetorOC)
