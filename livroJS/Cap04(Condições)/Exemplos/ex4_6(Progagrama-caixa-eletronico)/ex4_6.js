/* Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade e informe o número mínimo de notas 100, 50, 10 necessárias para pagar esse saque.
*/

//criar referencia aos elementos do documento

const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

//cria um evento de ouvinte

frm.addEventListener("submit", (e) => {

    e.preventDefault()//evita envio do formulario
    const saque = Number(frm.inSaque.value) //obtem o valor do saque
    if (saque % 10 != 0){ // se saque não é multiplo de 10
        alert("Valor inválido para as notas disponivéis(R$: 10, 50, 100)")
        frm.inSaque.focus()
        return
    }
    const notasCem = Math.floor(saque / 100) //calcula notas de 100
    let resto = saque % 100 //quanto sobra para pagar
    const notasCinquenta = Math.floor(resto/ 50) //calcula notas de 50
    resto = resto % 50 // quanto ainda sobra
    const notasDez = Math.floor(resto / 10)//calcula notas de 10
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$10: ${notasDez}`
    }

})