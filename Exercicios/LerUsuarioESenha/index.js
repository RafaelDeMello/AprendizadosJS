function cadastrar() {
  // Obter elementos da página
  const usu = document.getElementById("txtU");
  const senha = document.getElementById("txtS");

  //Obter Valores dos Elementos da página
  let u = usu.value;
  let s = senha.value;
  if (u == 0 || s == 0) {
    window.alert("Preencha os campos");
  } else {
    while (u == s) {
      window.alert("O usuário não pode ser igual a senha");
      i++;
    }
    window.alert("Login criado com sucesso!");
  }
}
function mostrar(){
    const pass = document.getElementById("txtS")
    const button = document.getElementById("btt")
    if(pass.type === "password"){
        pass.type = "text"
        button.value = "Esconder"
    } else {
        pass.type = "password"
        button.value = "Mostrar Senha"
    }
}

