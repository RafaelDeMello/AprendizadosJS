function mostrar(){
    const valor1 = document.getElementById("inNumero1")
    const valor2 = document.getElementById("inNumero2")
    const res = document.getElementById("res")

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

    for (let i = inicio ; i <= fim; i++){
        resposta += i + " "
    }
    res.innerText = `Os números são: ${resposta}.`
}