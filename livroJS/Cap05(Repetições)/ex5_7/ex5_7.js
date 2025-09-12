const frm = document.querySelector("form"); // obtém referência ao formulário
const resp = document.querySelector("#outEspacos");

frm.addEventListener("submit" , (e) => { // adiciona ouvinte ao evento submit do formulário
    e.preventDefault(); // evita envio do formulário

    const num = Number(frm.inNumero.value) // obtém conteúdo do campo de entrada
    let estrelas = ""; // string para concatenar os símbolos
    for (let i = 1; i <= num; i++) { // repete de 1 até o número informado
       if(i % 2 == 1){  // verifica se o número é ímpar
        estrelas += "*"; // concatena o símbolo
       } else {
        estrelas += "-"; // concatena o símbolo
       }
    }
    resp.innerText = estrelas // exibe a resposta
})
