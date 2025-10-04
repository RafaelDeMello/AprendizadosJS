// Obtem elementos da página
const frm = document.querySelector("form") 
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

//Declara o vetor global pacientes
const pacientes = []

//Adiciona ouvinte de eventos
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita reenvio de formulário
    const nome = frm.inPaciente.value //Obtém o nome do paciente
    pacientes.push(nome) // Adiciona o nome do paciente ao vetor
    let lista = "" // String para concatenar pacientes
    // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${paciente}\n`
    })
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

//Add ouvinte de eventos par o evento click no btUrgencia que etá no form
frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validações do form estão ok(No caso, paciente is required)
    if (!frm.checkValidity()){
        alert("Informe o paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus() //posiciona o cursor no campo paciente
        return // retorna ao formulário
    }
    const nome = frm.inPaciente.value //Obtém nome do paciente
    pacientes.unshift(nome) //add paciente ao início do vetor
    let lista = ""  // String para concatenar pacientes

    //for each aplicadon aos pacientes
    pacientes.forEach((paciente, i) => {
        lista += `${i + 1}. ${paciente}\n`
    })
    respLista.innerText = lista //exibe a lista de pacientes na página
    frm.inPaciente.value = "" // Limppa conteúdo do campo de formulário
    frm.inPacinete.focus()
})
// Add ouvint em btnAtender
frm.btAtender.addEventListener("click", () =>{
    //Se o vertor-Array for igual a zero
    if (pacientes.length == 0){
        alert("Não há pacientes em espera!")
        frm.inPaciente.value = ""
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() //Remove do início da fila(e obtém o nome)
    respNome.innerText = atender // exibe o nome do paciente em atendimento
    let lista = "" // Para concatenar a lista
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista //exibe lista de pacientes na página
})

