function calcular() {
    let popA =  80000
    let popB = 200000
    let taxaA = 0.03
    let taxaB = 0.015
    let anos = 0
    const res = document.getElementById("res")

    while(popA < popB){
        popA = popA + (popA * taxaA)
        popB = popB + (popB * taxaB)
        anos++
    }

    res.innerText = `A quantidade de anos necessários será ${anos}`
}
