function clicar() {
    const num = document.getElementById("inNumero")
    numS = Number(num.value)
    const res = document.getElementById("outRes")

    if(numS == 0){
        window.alert("Preencha o campo corretamente!")
    } else {
        let estrelas = ""
        for (let i = 1; i <= numS; i++){
            if (i % 2 == 1) {
                estrelas += "*"
            } else {
              estrelas = estrelas + "-"
            }
        }   
        res.innerText = estrelas
    }
    
}