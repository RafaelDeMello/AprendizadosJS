
function clicar(){
        const nota = document.getElementById("inNota")
        const ntV = Number(nota.value)
        while (ntV == 0 || ntV > 10){
           window.alert("Insira um valor válido!")
           ntV = ntV+  1
        }
        window.alert("Nota Recebida com Sucesso!")
    }