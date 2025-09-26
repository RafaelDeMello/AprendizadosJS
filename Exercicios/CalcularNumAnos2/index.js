function calcular(){
    const res = document.getElementById("outRes")
    let popA = document.getElementById("txtPA")
    let taxaA = document.getElementById("txtTCA")
    let popB = document.getElementById("txtPB")
    let taxaB = document.getElementById("txtTCB")

    let pA = Number(popA.value)
    let txA = Number(taxaA.value / 100)

    let pB = Number(popB.value)
    let txB = Number(taxaB.value / 100)

    let anos = 0
    
    while (pA < pB){
        pA = pA + (pA * txA)
        pB = pB + (pB * txB)
        anos++
    }

   res.innerText = `A quantidade de anos necessárioas para A ser maior que B é: ${anos} anos!`
}