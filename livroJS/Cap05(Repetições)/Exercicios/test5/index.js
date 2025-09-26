function clicar() {
  //Obter os dados dos campos
  const valtot = document.getElementById("inValorTot");
  const numParcelas = document.getElementById("inNumParcelas");
  const res = document.getElementById("outRes");
  const res2 = document.getElementById("outRes1")

  const total = Number(valtot.value);
  const numP = Number(numParcelas.value);
  if(numP == 0 && total == 0) {
     window.alert("Preencha todos os campos");
  }
  if (numP > 12) {
      window.alert("Número de parcelas Inválidas");
  } else {
    res.innerHTML= `Valor: R$${total.toFixed(2)} <br> Número de Parcelas: ${numP}`
     let valorP = Math.floor(total / numP)
     let valorF = valorP + (total % numP)
     for (let i = 1; i < numP; i++){
         res2.innerHTML += `Parcela ${i} valor: R$${valorP.toFixed(2)} <br>`
     }
     res2.innerHTML += `Parcela ${numP} valor: R$${valorF.toFixed(2)}`
  }
}
