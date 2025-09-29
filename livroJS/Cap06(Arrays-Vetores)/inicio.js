const cidades = ["pelotas"]  // declara e define conteúdo inicial a um vetor

cidades.push("São lourenço") // Adiciona cidade ao final do vetor
console.log(cidades)
 
cidades.unshift("Porto Alegre") // Adiciona uma cidade ao início do vetor e desloca as demais
console.log(cidades)

const ultima = cidades.pop() // remove a ultima cidade do vetor
console.log(ultima)
console.log(cidades)

const primeira = cidades.shift() // Remove a primeira e sobe as demais 
console.log(primeira)
console.log(cidades)
