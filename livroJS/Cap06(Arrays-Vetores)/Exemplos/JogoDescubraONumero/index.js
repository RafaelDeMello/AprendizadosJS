// Obtem elementos da página
const frm = document.querySelector("form")
const respErros = document.getElementById("outErros")
const respChances = document.getElementById("outChances")
const respDica =  document.getElementById("respDica")

const erros = [] //vetor de escopo global com numeros ja apostados
const sorteado = Math.floor(Math.random() * 100) + 1 //num aleatório entre 1 e 100
const CHANCES = 6 //constante com número máximo de tentativas
//cria ouvinte de evento para o envio do formulário
frm.addEventListener("submit", (e) => {
    //evita envio do form
    e.preventDefault()
    const numero = Number(frm.inNumero.value) //obtem o número digitado no formulário
    if (numero == sorteado){
        respDica.innerText = `Parabéns! Número sorteado é ${sorteado}`
        frm.btSubmit.disabled = true //troca status do botão
        frm.btNovo.className = "Exibe" //exibe o botão novo
    } else {
        if (erros.includes(numero)){ // Se o número existe no vetor erros(Ja foi apostado)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero) //adiciona números ao vetor
            const numErros = erros.length //obtem tamanho do vetor
            const numChances = CHANCES - numErros // calcula n de chances
            //exibição de numero de erros, conteudo do vetor e n de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if (numChances == 0){
                alert("Suas chances acabaram")
                frm.btSubmit.disabled = true 
                frm.btNovo.className = "Exibe"
                respDica.innerText = `Game Over! Número sorteado é ${sorteado}`
            } else {
                //usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente outro número ${dica} que ${numero}`
            }
        }
    }

    frm.inNumero.value = "" //limpa o campo de entrada
    frm.inNumero.focus() //posiciona o cursor neste campo


})