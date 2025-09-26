function contar(){
    const ini = document.getElementById("txti")
    const fim = document.getElementById("txtf")
    const passo = document.getElementById("txtp")
    const res = document.getElementById("res")

    let iniC = Number(ini.value)
    let fimC = Number(fim.value)
    let incre = Number(passo.value)

    if (iniC == 0 || fimC == 0 || incre == 0 ){
        window.alert("Preencha os campos com valores válidos")
    } else {
        res.innerHTML = "Contando: "
        if (iniC < fimC){
            for(let i = iniC; i <= fimC; i += incre){
                res.innerHTML += `${i}  `
            }
        } else {
            for(let i = iniC; i >= fimC; i -= incre){
                res.innerHTML += `${i} `
            }
        }
    }
}