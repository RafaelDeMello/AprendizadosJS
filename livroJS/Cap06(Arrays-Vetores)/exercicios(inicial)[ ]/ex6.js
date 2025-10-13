const vetor=[5, 2]

function MenorOuMaior(n1, n2){
     return n1 < n2 ?  [n1 , n2] : [n2 , n1]
}

console.log(MenorOuMaior(vetor[0], vetor[1]))