// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Add um ouvinte de eventos
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let resposta = `Entre ${numero} e 1: ${numero},`;
  let i = numero - 1;
  while (i > 0) {
    resposta = resposta + i + ",";
    i--;
  }
  resp.innerText = resposta;
});
