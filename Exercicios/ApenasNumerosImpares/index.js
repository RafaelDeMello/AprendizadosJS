function mostrar() {
  const res = document.getElementById("res");
  let impares = "";
  let c = 1;
  /*for(let i = 1; i <= 50; i++){
        if(i % 2 == 1){
           impares += i + " "
        }
       res.innerText = `Numeros impares = ${impares}` 
    }
    */
  while (c <= 50) {
     if(c % 2 == 1){
           impares += c + " "
        }
    c ++
  }

  res.innerText = `Números ímpares:${impares}`
}
