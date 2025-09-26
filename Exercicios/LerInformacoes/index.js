let n, I, S, sexSelecionado, estadoCivilSelect;
function cadastrar() {
  const name = document.getElementById("txtN");
  const Idade = document.getElementById("txtI");
  const salario = document.getElementById("txtSa");
  let sex = document.getElementsByName("sexo");
  let estadoCivil = document.getElementsByName("estadoCivil");
  const res = document.getElementById("textH2");
  const buttonM = document.getElementById("bttMostrar");


  // Coletar o Nome
  n = name.value;
  if (n == 0) {
    window.alert("Preencha o seu nome!");
    return;
  }
  //Coletar a idade
  I = Number(Idade.value);
  if (I <= 0 || I > 150) {
    window.alert("Insira uma idade válida");
    return;
  }
  //Coletar o Salário
  S = Number(salario.value);
  if (S == 0) {
    window.alert(`Preencha o campo "Salário"!`);
    return;
  }
  // Coletar informações do sexo cadastrado
  sexSelecionado = "";
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      sexSelecionado = sex[i].value;
    }
  }
  if (sexSelecionado === "") {
    window.alert("Nenhum sexo selecionado!");
    return;
  }
  // Coletar iformações sobre Estado Civil
  estadoCivilSelect = "";
  for (let i = 0; i < estadoCivil.length; i++) {
    if (estadoCivil[i].checked) {
      estadoCivilSelect = estadoCivil[i].value;
    }
  }
  if (estadoCivilSelect === "") {
    window.alert("Selecione um Estado Civil!");
    return;
  }

  res.innerHTML = "Dados coletados com Sucesso!";
  buttonM.style.display = "block";
}
function mostrarDados() {
  const mostrar = document.getElementById("printDados");

  mostrar.innerHTML = `Nome: ${n}<br> Idade: ${I}<br> Salário: ${S.toFixed(
    2
  )}<br> Sexo: ${sexSelecionado}<br>Estado Civil: ${estadoCivilSelect}`;
}
