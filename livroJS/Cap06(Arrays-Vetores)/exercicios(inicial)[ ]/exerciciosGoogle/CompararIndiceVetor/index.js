const vetor = [1, 2, 3, 1, 2, 3, 1, 1] // Indices que contem o numero um [0 ,3, 6, 7]
const vetInd = []

// function acharInd(vet, valor){
//         for(let i = 0; i < vet.length; i++){
//             if(valor == vetor[i]){
//                 vetInd.push(i)
//             }
//         }
//         return vetInd
// }

// console.log(acharInd(vetor, 1))


// Com forEach


function acharInd(vet, valor){
        vet.forEach((ele, ind) => {
            if(ele == valor){
                vetInd.push(ind)
            }
        });
        return vetInd
}
acharInd(vetor, 1)
console.log(vetInd)

