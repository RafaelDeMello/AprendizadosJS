const frm = document.querySelector("form"); // Obtem os elementos da página
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => { //"escuta evento submit dp form"
    e.preventDefault(); // Evita envio do form

    const numero = Number(frm.inNumero.value); // Obtem o número informado
    let resposta = "" // Variavel do tipo string para concatenar 
    //Cria um laço de repetiçao (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        // a Variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " +(numero * i) + "\n"
    }
    resp.innerText = resposta; // O conteudo da tag pre é alterado para exibir a tabuada
})