//referencias aos elementos do documento

const frm = document.querySelector("form")
const resp1 = document.querySelector("#respOut1")
const resp2 = document.querySelector("#respOut2")

// Ouvinte de eventos ao clicar no 'submit'

frm.addEventListener("submit", (e) =>{

    const produto = (frm.inProduto.value) // recebendo dados do formulario
    const preco = Number(frm.inPreco.value)

    const itempromo = preco * 0.50
    const totalSemDesc = preco * 3
    const totalComDesc = totalSemDesc - itempromo

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${totalComDesc.toFixed(2)}`
    resp2.innerText = `O 3° produto custa apenas R$: ${itempromo.toFixed(2)} `

    e.preventDefault()  

})