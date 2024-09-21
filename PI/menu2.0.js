const readline = require("readline-sync");

const usuariosCadastrados = [];

function login() {
  console.clear();
  console.log("=========================================");
  console.log("|               LOGIN                   |");
  console.log("=========================================");
  const login = readline.question("LOGIN: ");
  const senha = readline.question("SENHA: ", { hideEchoBack: true });

  const usuario = usuariosCadastrados.find(usuario => usuario.nome === login && usuario.senha === senha);

  if (usuario) {
    console.log("Acesso concedido");
    readline.question("Pressione ENTER para continuar...");
    telaInicio(usuario);
  } else {
    console.log("Acesso negado");
    readline.question("Pressione ENTER para tentar novamente...");
    cadastro();
  }
}

function listarUsuarios() {
  console.clear();
  console.log("======================================== ");
  console.log("|\t\t LISTA DE CLIENTES\t\t\t   |");
  console.log("======================================== ");

  if (usuariosCadastrados.length === 0) {
    console.log("Nenhum cliente cadastrado.");
  } else {
    usuariosCadastrados.forEach((usuario, index) => {
      console.log(`Usuário: ${index + 1}:`);
      console.log(`Nome: ${usuario.nome}`);
      console.log(`Sobrenome: ${usuario.sobrenome}`);
      console.log(`Email: ${usuario.email}`);
      console.log("----------------------------------------");
    });
  }

  readline.question("Pressione ENTER para voltar à tela inicial...");
  telaInicio(); 
}

function editarPerfil(usuario) {
  console.log("=========================================");
  console.log("|        EDITAR PERFIL DO USUARIO       |");
  console.log("=========================================");

  const novoNome = readline.question("Novo Nome: ");
  const novoSobrenome = readline.question("Novo Sobrenome: ");
  const novoEmail = readline.question("Novo Email: ");
  const novaSenha = readline.question("Nova Senha: ", { hideEchoBack: true });
  const confNovaSenha = readline.question("Confirmar Nova Senha: ", { hideEchoBack: true });

  console.log("=========================================");
  console.log("| [1] Salvar alterações");
  console.log("| [2] Cancelar edição");
  console.log("=========================================");
  const question = readline.questionInt("Escolha uma opção acima: ");
  
  if (question === 1) {
    cliente.nome = novoNome;
    cliente.sobrenome = novoSobrenome;
    cliente.email = novoEmail;
    cliente.senha = novaSenha;
    
    console.log("Alterações salvas com sucesso!");
    readline.question("Pressione ENTER para continuar...");
    telaInicio(usuario);
  } else if (question === 2) {
    console.log("Alteração cancelada.");
    readline.question("Pressione ENTER para continuar...");
    telaInicio(usuario);
  } else {
    console.log("Opção inválida. Tente novamente.");
    readline.question("Pressione ENTER para continuar...");
    editarPerfil(usuario);
  }
}

function cadastroUsuario() {
  console.clear();
  console.log("=========================================");
  console.log("|          Cadastro de Usuário          |");
  console.log("=========================================");

  const nome = readline.question("NOME: ");
  const sobrenome = readline.question("SOBRENOME: ");
  const email = readline.question("EMAIL: ");
  const senha = readline.question("SENHA: ", { hideEchoBack: true });

  const confSenha = readline.question("CONFIRME A SENHA: ", { hideEchoBack: true });

  if (senha !== confSenha) {
    console.log("SENHAS DIFERENTES!");
    readline.question("Pressione ENTER para tentar novamente...");
    cadastroUsuario(); 
    return;
  }

  const novoUsuario = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha,
  };

  usuariosCadastrados.push(novoUsuario);

  console.log("Usuário cadastrado com sucesso!");
  readline.question("Pressione ENTER para continuar...");
  cadastro();
}

function telaInicio(usuario) {
  console.clear();
  console.log("========================================================");
  console.log("|                    TELA INICIAL                      |");
  console.log("======================================================== ");
  console.log("|  [1]- Cadastrar serviço\t\t\t\t   |");
  console.log("|  [2]- Cadastrar cliente\t\t\t\t   |");
  console.log("|  [3]- Realizar agendamento\t\t\t   |");
  console.log("|  [4]- Editar perfil\t\t\t\t\t   |");
  console.log("|  [5]- Listar clientes\t\t\t\t\t   |");
  console.log("|  [0]- Sair do sistema\t\t\t\t\t   |");
  
  const opcao = readline.questionInt("Escolha uma opção do menu: ");
  
  switch (opcao) {
    case 1:
      cadastrarServico();
      break;
    case 2:
      cadastroCliente(); 
      break;
    case 3:
      agendamento();
      break;
    case 4: 
      editarPerfil(usuario);
      break;
    case 5:
      listarClientes();
      break;
    case 0:
      console.log("Saindo do sistema...");
      return; 
    default:
      console.log("Opção inválida. Tente novamente.");
      readline.question("Pressione ENTER para continuar...");
      telaInicio(usuario);
      break;
  }
}

function cadastro() {
  console.clear();
  console.log("========================================================");
  console.log("|    \t      Sistema Gestão de Serviços     \t\t        |");
  console.log("========================================================"); 
  console.log("|\t\t\t\t[1]. Realizar login\t\t\t|");
  console.log("|\t\t\t\t[2]. Criar conta\t\t\t\t|");
  console.log("|\t\t\t\t[0]. Sair do sistema\t\t\t|");
  console.log("========================================================");
console.log();
const opcao = readline.questionInt("Escolha uma opção: ");
  
  switch (opcao) {
    case 1:
      login(); 
      break;
    case 2:
      cadastroUsuario(); 
      break;
    case 0:
      console.log("Saindo do sistema...");
      return; 
    default:
      console.log("Opção inválida.");
      readline.question("Pressione ENTER para continuar...");
      cadastro();
      break;
  }
}

function cadastrarServico() {
  console.clear();
  console.log("======================================== ");
  console.log("|\t\t\t CADASTRO DE SERVIÇO\t\t   |");
  console.log("======================================== ");
  
  const nomeServico = readline.question("Nome do Serviço: ");
  const descricao = readline.question("Descrição do Serviço: ");
  const duracao = readline.question("Duração Estimada: ");
  const preco = readline.question("Preço: ");
  
  console.log("Serviço cadastrado com sucesso!");
  readline.question("Pressione ENTER para voltar à tela inicial...");
  
  telaInicio(); 
}

function agendamento() {
  console.clear();
  console.log("======================================== ");
  console.log("|\t\t\t AGENDAMENTO\t\t\t   |");
  console.log("======================================== ");
  console.log("|Informações do Serviço: \t\t\t\t   |");
  console.log("|---------------------------------------|");
  
  const nomeCliente = readline.question("Nome do Cliente: ");
  const tipoServico = readline.question("Tipo do Serviço: ");
  const tempoEstimado = readline.question("Tempo Estimado: ");
  const preco = readline.question("Preço: ");

  console.log("Agendamento concluído com sucesso!");
  readline.question("Pressione ENTER para voltar à tela inicial...");
  
  telaInicio(); 
}


cadastro();