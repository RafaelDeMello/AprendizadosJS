let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort() 

//console.log(`Nosso vetor é o ${num}`)

console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)

if (pos == -1){
    console.log(`O valor não existe no vetor!`)
} else {
    console.log(`O valor existe no vetor e está na posição ${pos}`)
}

/*  for (let i = [0]; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
} */
//let i = 0
    /* while (i <= num.length - 1){
         console.log(num[i])
         i++
     } */

    /*do {
        console.log(num[i])
        i++
    } while (i <= num.length - 1) */
