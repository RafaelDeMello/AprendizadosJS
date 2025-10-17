// Capturar elementos da página
      const num = document.getElementById("inNumero");
      const mostrarVetor = document.getElementById("outValores");
      const vetorInvertido = document.getElementById("outVetorInvertido")
      const vetorCrescente = document.getElementById("outCrescente")
      const vetorDecrescente = document.getElementById("outDecrescente")
      const btnAoc = document.getElementById("btnAoc");
      const crescente = document.getElementById("OC")
      const decrescente = document.getElementById("OD")
      const vetor = [];
      const vetorAoc = []
      
      
      let j = 0

      function pegarValor() {
        if (!num.value) {
          alert("insira valores válidos");
          num.value = " ";
          num.focus();
          return;
        } else {
          vetor.push(Number(num.value));
          num.value = " ";
          num.focus();
        }
        mostrarVetor.innerText = `Os números do vetor são: [${vetor}]`;
        if (vetor.length > 1) {
          btnAoc.style.display = "block";
          crescente.style.display = "block";
          decrescente.style.display = "block";

        }
      }
      function inverter(){
          for(let i = vetor.length -1; i >=0; i--){
             vetorAoc[j] = vetor[i]
             j++    
          }
          vetorInvertido.innerText = `O vetor invertido é [${vetorAoc}]`
      }
      
      function OrdemCrescente(){
        const vetorCres = [...vetor]
          let temp = 0
          let troca = true
          while (troca){
            troca = false
            for(let i = 0; i < vetorCres.length -1; i++){
                if(vetorCres[i] > vetorCres[i + 1]){
                    temp = vetorCres[i]
                    vetorCres[i] = vetorCres[i + 1]
                    vetorCres[i + 1] = temp
                    troca = true
                } 
            } 
          }
        vetorCrescente.innerText = `Vetor em ordem crescente: [${vetorCres}]`
      }

      function OrdemDecrescente(){
          const vetorDecres = [...vetor]
          let temp = 0
          let troca = true
          do {
            troca = false
            for (let i = 0;i < vetorDecres.length - 1; i++){
                if(vetorDecres[i] < vetorDecres[i + 1]){
                    temp = vetorDecres[i]
                    vetorDecres[i] =  vetorDecres[i + 1]
                    vetorDecres[i + 1] = temp
                    troca = true
                }
            }   
          } while(troca)
        vetorDecrescente.innerText = `Vetor em ordem crescente: [${vetorDecres}]`
      }