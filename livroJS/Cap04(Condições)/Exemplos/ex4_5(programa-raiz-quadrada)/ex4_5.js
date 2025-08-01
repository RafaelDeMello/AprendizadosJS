// cria referencia aos elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//adiciona um ouvinte de eventos

frm.addEventListener("submit", (e) =>{

    e.preventDefault() //evita envio do formulario
    
    const numero = Number(frm.inNumero.value)//obtem numero digitado
    const raiz = Math.sqrt(numero) //calcula a raiz
    if (Number.isInteger(raiz)) { //se a raiz for inteira
        resp.innerText = `Raiz: ${raiz}`//escreva no elemento h3
    } else { //se nao
        resp.innerText = `Não há raiz exata para ${numero}`//mostra mensagem
    }
})