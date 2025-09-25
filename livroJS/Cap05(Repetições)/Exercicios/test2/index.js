function clicar(){

    const fruta = document.getElementById("inFruta")
    const num = document.getElementById("inNumero")
    const res = document.getElementById("outRes")

    let numRep = Number(num.value)
    let frutaD = fruta.value
    let resposta = ""

    if (numRep == 0 || frutaD == 0){
        window.alert("Preencha todos os campos!")
    } else {
        for (let c = 1; c <= numRep; c++){
            resposta += `${frutaD} *`
        }
        res.innerText = resposta
    }

}