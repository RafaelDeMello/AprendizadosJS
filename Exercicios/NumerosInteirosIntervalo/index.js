function mostrar(){
    const valor1 = document.getElementById("inNumero1")
    const valor2 = document.getElementById("inNumero2")
    const res = document.getElementById("res")
    const res2 = document.getElementById("res2")

    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    if (n1 == 0 || n2 == 0){
        window.alert("Preencha todos os campos!")
        return
    }
    
    let inicio
    let fim

    if(n1 < n2){
        inicio = n1
        fim = n2
    } else {
        inicio = n2
        fim = n1
    }

    let resposta = ""
    let soma = 0

    for (let i = inicio ; i <= fim; i++){
        resposta += i + " "
        soma = soma + i
    }
    res.innerText = `Os números são: ${resposta}.`
    res2.innerText = `A soma dos números é ${soma}`
}