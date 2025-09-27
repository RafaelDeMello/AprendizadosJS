function guardar(){
    const res = document.getElementById("outRes")
    const res2 = document.getElementById("outRes1")
    let numeros = []
    for (let i = 1; i <=5 ; i++){
        let n = Number(prompt(`Digite o ${i} número: `))
        numeros.push(n)
    }

    let maior = numeros[0]
    
    for(let i = 1;i < numeros.length; i++){
           if(numeros[i] > maior){
            maior = numeros[i];
           }
    }
    let soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i]
    }
    const media = soma / 5
    res.innerText = `Os números digitados foram: ${numeros.join(", ")}\n` +
        `O maior número é: ${maior}`;
    res2.innerText = `A soma dos números é: ${soma}\n` + `A média dos valores é: ${media}`
}