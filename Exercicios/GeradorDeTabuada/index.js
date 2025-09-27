function gerar(){
    const num = document.getElementById("inNumero")
    const res = document.getElementById("res")
    let tab = document.getElementById("seltab")

    let n = Number(num.value)
    let resultado = ""
    if (n == ""){
        window.alert("Preencha os campos!")
        return
    }
    if (n > 10 || n < 0){
        window.alert("Insira um valor de 1 a 10")
        return
    } else {
        for (let i = 1; i <= 10; i++){
            resultado = n * i
            res.innerText += `${n} X ${i} = ${resultado}\n`
        }
    }
}