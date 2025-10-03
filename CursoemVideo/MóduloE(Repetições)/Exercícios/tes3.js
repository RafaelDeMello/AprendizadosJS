
let a = 0
let b = 1
let resultado = ""
for (let i = 0; i <= 5; i++){
    let proximo = a + b
    resultado += proximo + ", "
    a = b
    b = proximo
}   
console.log(resultado)