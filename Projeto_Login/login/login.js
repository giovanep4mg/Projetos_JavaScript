// Recuperar parâmetros da URL
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");
const senha = params.get("senha");
console.log("nome do banco de dados" + nome);
console.log("senha do banco de dados" + senha); // funcionando

// Variável global para simular banco de dados
let bancoDados = [
  {
    nome: " ",
    senha: " ",
  },
  {
    nome: " ",
    senha: " ",
  },
  // Adicione quantos usuários desejar
];
console.log(
  "Dados adicionados no banco de dados: " + JSON.stringify(bancoDados)
);

function enviarDados() {
  // Pega o nome do usuário e salva na variável nomeUsuario
  let nomeUsuario = document.getElementById("nomeLogin").value;
  console.log(nomeUsuario);

  // Pega a senha do usuário e salva na variável senhaUsuario
  let senhaUsuario = document.getElementById("senhaLogin").value;
  console.log(senhaUsuario);

  // Verificar se nome e senha foram preenchidos
  if (nomeUsuario === "" || senhaUsuario === "") {
    // Se o nome estiver vazio, escrever mensagem na página
    if (nomeUsuario === "") {
      document.getElementById("avisoNome").innerHTML =
        "Obrigatório preencher o nome!";
    }
    // Se a senha estiver vazia, escrever mensagem na página
    if (senhaUsuario === "") {
      document.getElementById("avisoSenha").innerHTML =
        "Obrigatório preencher a senha!";
    }
  } else {
    console.log("Tudo certo, continue com o processamento");

    // Verificar dados do banco
    if (nome === nomeUsuario && senha === senhaUsuario) {
      console.log(
        "Credenciais válidas. Redirecionar para a página do usuário."
      );

      // Aqui você pode redirecionar para a página do usuário ou realizar outras ações.
      window.location.href = "../pag_inicial/pag_inicial.html";
    }
    if (nome !== nomeUsuario) {
      // Criar uma aviso sobre nome errado
      alert("ERRO! Nome de usuário está errado! ");
      console.log("nome é diferente");
    }
    if (senha !== senhaUsuario) {
      // Criar um aviso sobre a senha está errada
      alert("ERRO! Senha está errada! ");
      console.log("senha errada!");
    }
  }

  // Exibir na página para mostrar que foi pego
  document.getElementById("nomeAdicionado").innerHTML =
    "Nome do Usuário: " + nomeUsuario;
  document.getElementById("senhaAdicionada").innerHTML =
    "Senha do usuário: " + senhaUsuario;
}
