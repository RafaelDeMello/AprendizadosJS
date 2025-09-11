const frm = document.querySelector("form") // obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => { // add eventos ao botao
   e.preventDefault() // evita envio do formulário

   const num = Number(frm.inNumero.value) // Obtem o número do formulário
    
//    let numDivisores = 0  // declara e inicializa o contador
//    for (let i = 1; i <= num; i++){ // percorre os números de 1 até num
//     if (num % i == 0) { // verifica se i é divisor de num
//         numDivisores++ // incrementa o contador
//     }
//    }
//    if (numDivisores == 2) { // se possui 2 divisores é primo
//     resp.innerText = `${num} é primo`
//    } else {
//     resp.innerText = `${num} não é primo`
//    }
   let temDivisor = 0 // declara e inicializa o flag
   for (let i = 2; i <= num / 2; i++){ // percorre os possíveis divisores
    if (num % i == 0) { // se tem um divisor
        temDivisor = 1  // muda o flag
        break // encerra o laco
    }
   }

   if (num > 1 && !temDivisor) { // se é maior que 1 e não tem divisor
    resp.innerText = `${num} é primo`
   } else {
    resp.innerText = `${num} não é primo`
   }
})