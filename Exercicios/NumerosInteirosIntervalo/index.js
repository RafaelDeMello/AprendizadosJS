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
    if(n1 % 1== 0 && n1 % n1 !== 0){
        window.alert(`${n1} não é um número primo. Insira um valor válido!`)
        return
    }
    if(n1 < n2){
        for (let i = n1; i < n2; i++){

        }
    }
}