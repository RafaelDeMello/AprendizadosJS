const num = []
let c = 0
let soma= 0

// for(let i = 0; i < 4; i++){
//     num[i] = (i + 1) * 5
//    console.log(num[i])
// }

for(let i = 0; i < 4; i++){
    c += 5
    num[i] = c
}
console.log(num)
num.forEach((n, i)=> {
    console.log(`${i+1} é igual a: ${n}`) 
})
num.forEach(n => soma += n)
console.log(`E a soma dos valores é: ${soma}`)

