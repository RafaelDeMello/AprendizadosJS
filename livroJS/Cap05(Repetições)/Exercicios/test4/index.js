function clicar() {
  const numI = document.getElementById("inNumIn");
  const anosC = document.getElementById("inNumAnos");
  const res = document.getElementById("outRes");

  let num = Number(numI.value);
  let anos = Number(anosC.value);
  let resposta = ""

  if (num < 2) {
    window.alert("O número mínimo de Chinchillas deve ser 2!")
  } else if (anos == 0){
    window.alert("Preencha Corretamente Os Dados!")
  } else {
    let qt = ""
    for (let c = 1; c <= anos; c++){
        if(c == 1){
           qt = num
        } else {
           qt = qt * 3
        }
        resposta += `${c} Ano: ${qt} Chinchillas. <br>`
    }
    res.innerHTML = `${resposta}`
  }
}
