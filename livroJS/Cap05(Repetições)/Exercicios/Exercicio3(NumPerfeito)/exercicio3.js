/*  Elaborar um programa que leia se o número é perfeito ou não.
    Um número é dito perfeito quando ele é igual a soma dos seus divisores
    Exemplo: 6 = 1 + 2 + 3
             28 = 1 + 2 + 4 + 7 + 14
    O programa deve exibir os divisores do número e a soma deles.
    E escrever se o número é perfeito ou não.
*/

//Obter elementos da página

const frm = document.querySelector("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
//Adicionar um evento ao formulário
frm.addEventListener("submit", (e) => {

    e.preventDefault(); //Evitar o envio do formulário
    //Obter os valores digitados
    const num = Number(frm.inNumero.value);
    let soma = 0;
    let divisores = "";

    //Calcular os divisores
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            soma += i; //Acumular a soma dos divisores
            divisores += i + " "; //Concatenar os divisores
        }
    }
    //Exibir os divisores e a soma deles
    resp1.innerText = `Divisores: ${divisores} \n Soma: ${soma}`;
    if (soma === num){
        resp2.innerText = num + " é um número perfeito!";
    } else {
        resp2.innerText = num + " não é um número perfeito!";
    }
})