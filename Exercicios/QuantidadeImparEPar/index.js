function comecar(){
    const res = document.getElementById("res")
    const res2 = document.getElementById("res2")


    let par = 0
    let impar = 0
    for (let i = 1; i <= 10; i++){
          const num = Number(prompt(`Digite o ${i}º valor:`))
          res.innerText += `${i}º valor: ${num}\n`
          if(num % 2 ==0){
            par ++
          } else {
            impar ++
          }
          res2.innerText = `Total de números pares: ${par} \n
          Total de números impares: ${impar}`
        }
    
}