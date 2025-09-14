/* Criar um programa que leia o número inicial de chinchilas e informe quantos chinchilas
 Calcular o número de chinchilas ao passar dos anos. considerando que a cada ano o número de chinchilas
 é multuiplicado por 3.
*/

//Obter elementos da página
const frm = document.querySelector("form");
const resp = document.getElementById("outResp");

//Adicionar um evento ao formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //Evitar o envio do formulário

    //Obter os valores digitados
    const numChinchilas = Number(frm.inNumChinchillas.value)
    const numAnos = Number(frm.inNumAnos.value)

})

