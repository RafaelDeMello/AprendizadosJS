// Cria referencia ao form e ao elemento h3(onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento , adicionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value //obtem o nome digitado no form
    resp.innerText = `Olá ${nome}` // exibe a resposta do progama
    e.preventDefault() // evita envio do formulário
})

