const letras = ["A", "B", "C", "D"] //Declara e define conteúdo inicial do vetor
const letras2 = letras.slice(-2) //Obtém as 2 ultimas letras
const letras3 = letras.slice(0, -1) //obtem do inicio ate o final, exceto ultima linha
console.log(letras) // ['A', 'B', 'C', 'D']
console.log(letras2) // ['C', 'D']
console.log(letras3) // ['A', 'B', 'C']

const retira = letras.splice(2, 1) //remove a partir da posição 2, 1 elemento
console.log("-".repeat(15))
console.log(letras.join(" = ")) // ['A', 'B', 'D']
console.log(retira) // ['C']

 