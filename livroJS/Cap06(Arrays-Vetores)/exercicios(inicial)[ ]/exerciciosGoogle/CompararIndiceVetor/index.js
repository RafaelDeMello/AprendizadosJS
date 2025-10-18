const vetor = [1, 2, 3, 1, 2, 3, 1, 1] // Indices que contem o numero um [0 ,3, 6, 7]
const vetInd = []

function acharInd(vet, valor){
        for(let i = 0; i < vetor.length - 1; i++){
            if(valor = vetor[i]){
                vetInd.push(i)
            }
        }
}

console.log(acharInd(vetor, 1))

