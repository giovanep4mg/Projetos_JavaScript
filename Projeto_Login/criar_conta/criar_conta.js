// Criando o banco de dados
let bancoDados = [];

// Função para pegar os dados do usuário para criar uma conta
function enviarDados() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;

  if (nome === "" || senha === "") {
    if (nome === "") {
      document.getElementById("avisoNome").innerHTML =
        "Obrigatório preencher o nome!";
    }
    if (senha === "") {
      document.getElementById("avisoSenha").innerHTML =
        "Obrigatório preencher a senha!";
    }
  } else {
    // Adiciona conta ao banco de dados
    adicionarContaBanco(nome, senha);

    // Exibe mensagem de sucesso
    alert(
      "Sua conta foi criada com sucesso!\nVocê será redirecionado para a página de login."
    );

    // Redireciona para a página de login
    window.location.href =
      "../login/login.html?nome=" +
      encodeURIComponent(nome) +
      "&senha=" +
      encodeURIComponent(senha);
  }
}

function adicionarContaBanco(nome, senha) {
  const novaConta = {
    nome: nome,
    senha: senha,
  };
  bancoDados.push(novaConta);
}
