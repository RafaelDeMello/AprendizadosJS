function clicar() {
  //Obter os dados dos campos
  const valtot = document.getElementById("inValorTot");
  const numParcelas = document.getElementById("inNumParcelas");
  const res = document.getElementById("outRes");

  const total = Number(valtot.value);
  const numP = Number(numParcelas.value);
  if(numP == 0 && total == 0) {
     window.alert("Preencha todos os campos");
  }
  if (numP > 10) {
      window.alert("Número de parcelas Inválidas");
  } else {
     
  }
}
