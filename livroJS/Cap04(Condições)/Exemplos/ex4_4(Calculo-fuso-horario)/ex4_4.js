/* eLABORAR UM PROGAMA QUE LEIA A HORA NO BRASIL E INFORME A HORA NA FRANÇA. */

// faz referencias aos elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criar um ouvinte de eventos
frm.addEventListener("submit", (e) =>{
    
    e.preventDefault() //Evita envio do formulário

    const horaBrasil = Number(frm.inHoraBrasil.value) //recebe o valor
    let horaFranca = horaBrasil + 5 //calcula o horário na franca
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24 //subtrai 24
    }
    
    //exibir a resposta
    resp.innerText = `Hora na Franca: ${horaFranca.toFixed(2)}hrs`
})

