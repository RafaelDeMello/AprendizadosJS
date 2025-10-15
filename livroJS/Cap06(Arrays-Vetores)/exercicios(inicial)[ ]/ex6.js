const vetor=[ 1 , 2 ]

function MenorOuMaior(n1, n2){
     if (n1 > n2 ){
          return vetor.reverse()
     } else {
          return vetor
     }
}
console.log(MenorOuMaior(vetor[0], vetor[1]))

const vetor2 = [5 ,2]

function MenorOuMaior2(n1, n2){
  return n1 > n2 ? [n2 , n1] : [n1, n2]
}

console.log(MenorOuMaior2(vetor2[0], vetor2[1]))