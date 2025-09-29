let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
console.log(`O vetor tem ${valores.length} posições!`)
console.log(`O primeiro valor do meu vetor é: ${valores[0]}`)
console.log(`O ultimo valor do meu vetor é: ${valores[5]}`)
console.log(" ")

/*for (let pos = 0; pos < valores.length; pos++){
    console.log(`O valor ${pos} do meu vetor é: ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`O valor ${pos} do meu vetor é: ${valores[pos]}`)
} 