function mostrar(){
   const res = document.getElementById("res")
   let impares = ""
    for(let i = 1; i <= 50; i++){
        if(i % 2 == 1){
           impares += i + " "
        }
       res.innerText = `Numeros impares = ${impares}` 
    }
}