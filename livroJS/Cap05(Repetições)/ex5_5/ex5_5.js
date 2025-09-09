const frm = document.querySelector("form"); //Obtem elementos da página
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = ""; //variavekl com a resposta a ser exibida
let numContas = 0 // Inicializa o contador
let valTotal = 0 // e acumulador(variaveis globais)

frm.addEventListener("submit", (e) => { // ecuta evento submit do form 
     e.preventDefault(); //evita envio do formulário

     const descricao = frm.inDescricao.value;// Obetem dados da conta
     const valor = Number(frm.inValor.value);

     numContas++ // Adiciona valores ao contador e acumulador
     valTotal += valor // Atualiza o valor total utilizando a sintaxe +=

     resposta = resposta + descricao  + "- R$: " + valor.toFixed(2) + "\n" // Atualiza a resposta

     resp1.innerText = `${resposta} -------------------` // Exibe a resposta
     resp2.innerText = `${numContas} Conta(s) - Total R$ : ${valTotal.toFixed(2)}`

     frm.inDescricao.value = "" // Limpa os campos
     frm.inValor.value = ""
     frm.inDescricao.focus() // posiciona o cursor em inDescricao
})