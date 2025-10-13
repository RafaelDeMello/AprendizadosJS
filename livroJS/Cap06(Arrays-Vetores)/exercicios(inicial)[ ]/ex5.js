// Desenvolva um programa em Node.js que simule uma clínica veterinária. 
// Crie um array vazio chamado clinica que representará a fila de animais na clínica. 
// Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. 
// Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = []
clinica.push("gato", "cachorro", "cavalo")
console.log(`A lista de animais a serem atendidas é: ${clinica}`)
clinica.splice(0, 2) // A partir do indice 0 retira 2 elementos (0 e 1 = gato e cachorro)
    console.log(`Restam ${clinica} para receberem consulta`);
// clinica.shift()
// console.log(clinica)
// clinica.shift()
// console.log(clinica)
// clinica.shift()
// console.log(clinica)

