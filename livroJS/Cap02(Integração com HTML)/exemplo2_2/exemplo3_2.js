// Cria refência ao form e aos alementos H3 e H4 (resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// Cria um ouvinte de evento, adicionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value   // obtém dados do campo
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)  // arredonda para baixo resultado
    const minutos = duracao % 60 // obtém o resto da divisão

    resp1.innerText = titulo  // exibe as respostas
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`


    e.preventDefault()       // evita o envio do form e reload da página

})