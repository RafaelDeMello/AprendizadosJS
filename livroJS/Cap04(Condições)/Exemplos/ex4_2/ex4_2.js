//cria referencia aos elementos do documento
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvinte de eventos, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do formulario

    const nome = frm.inNome.value  // recebe as informacoes
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)
    
    let peso   // declara a variavel peso
    if (masculino){ //Se masculino (ou if masculino == true)

        peso = 22 * Math.pow(altura, 2) //MAth.pow eleva ao quadrado

    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta(altera o conteudo do elemento h3 na página)

    resp.innerText = `${nome} Seu peso ideal é ${peso.toFixed(3)} kg`
})

 frm.addEventListener("reset", (e) => {
     resp.innerText = "" //Limpa o conteudo do elemento h3 que exibe a resposta
 })