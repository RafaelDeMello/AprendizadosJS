// criar referencia aos elementos da pagina

const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")

//criar ouvinte de eventos

frm.addEventListener("submit", (e) => {

    //evita envio formulário
    e.preventDefault()

    //Coleta os dados do formulário
    const A = Number(frm.inLadoA.value)
    const B = Number(frm.inLadoB.value)
    const C = Number(frm.inLadoC.value)

    let triangulo 
    if (A > (B + C)){
        triangulo = "Lados não podem formar um triângulo"
    } else if (B > (A + C)){
        triangulo = "Lados não podem formar um triângulo"
    } else if (C > (A + B)){
        triangulo = "Lados não podem formar um triângulo"
    } else {
        triangulo = "Lados podem formar um triângulo"
    }
    resp1.innerText = `${triangulo}`

    let tipoTri
    if (A == B && B == C){
        tipoTri = "Tipo: equilátero"
    } else if (A == B || A == C || B == C) {
        tipoTri = "Tipo: Isósceles"
    } else {
        tipoTri = "Tipo: Escaleno"
    }

    resp2.innerText = `${tipoTri}`

})