const readline = require("readline-sync");

const clientesCadastrados = [];

function login() {
  console.clear();
  console.log("=========================================");
  console.log("|               LOGIN                  |");
  console.log("=========================================");
  const login = readline.question("LOGIN: ");
  const senha = readline.question("SENHA: ", { hideEchoBack: true });

  const cliente = clientesCadastrados.find(cliente => cliente.nome === login && cliente.senha === senha);

  if (cliente) {
    console.log('Acesso concedido');
    readline.question("Pressione ENTER para continuar...");
    telaInicio(cliente); 
  } else {
    console.log('Acesso negado, Usúario não possui cadastro');
    readline.question("Pressione ENTER para tentar novamente...");
    cadastro();
  }
}

function editarPerfil(cliente) {
  console.log("=========================================");
  console.log("|          EDITAR PERFIL DO CLIENTE      |");
  console.log("=========================================");

  const novoNome = readline.question("| Novo Nome: ");
  const novoSobrenome = readline.question("| Novo Sobrenome: ");
  const novoEmail = readline.question("| Novo Email: ");
  const novaSenha = readline.question("| Nova Senha: ", { hideEchoBack: true });
  const confirmarSenha = readline.question("| Confirmar Nova Senha: ", { hideEchoBack: true });

  console.log("=========================================");
  console.log("| [1] Salvar alterações");
  console.log("| [2] Cancelar edição");
  console.log("=========================================");
  const question = readline.questionInt("Escolha uma opção acima: ");
  
  if (question === 1) {
    console.log('Alteração feita com sucesso');
    readline.question("Pressione ENTER para tentar novamente...");
    telaInicio(cliente); 
  } else if (question === 2) {
    console.log('Alteração cancelada');
    readline.question("Pressione ENTER para tentar novamente...");
    login();
  } else {
    console.log('Insira um número correto');
  }
}

function cadastroCliente() {
  console.clear();
  console.log("=========================================");
  console.log("|          Cadastro de Cliente          |");
  console.log("=========================================");

  const nome = readline.question("NOME: ");
  const sobrenome = readline.question("SOBRENOME: ");
  const email = readline.questionInt("número : ");
  const senha = readline.question("SENHA: ", { hideEchoBack: true });

  const confSenha = readline.question("CONFIRME A SENHA: ", { hideEchoBack: true });

  if (senha !== confSenha) {
    console.log("SENHAS DIFERENTES!");
    readline.question("Pressione ENTER para tentar novamente...");
    cadastroCliente(); 
    return;
  }

  const novoCliente = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha
  };

  clientesCadastrados.push(novoCliente);

  console.log("Cliente cadastrado com sucesso!");
  readline.question("Pressione ENTER para continuar...");
  telaInicio();
}

function telaInicio(cliente) {
  console.clear();
  listas()
  console.log("======================================== ");
  console.log("|\t TELA INICIAL\t\t\t  |");
  console.log("======================================== ");
  console.log("|1- Cadastrar serviço\t\t   |");
  console.log("|2- Cadastrar cliente\t\t   |");
  console.log("|3- Realizar agendamento\t\   |");
  console.log('|4 - Editar perfil\t\t')
  console.log("|0- Sair do sistema\t\t   |");
  
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
      editarPerfil(cliente);
      break;
    case 0:
      console.log("Saindo do sistema...");
      return; 
    default:
      console.log("Opção inválida");
      readline.question("Pressione ENTER para tentar novamente...");
      telaInicio(cliente); 
      break;
  }
}

function cadastro() {
  console.clear();
  console.log("=========================================");
  console.log("|    \t\tINICIO \t\t\t|");
  console.log("=========================================");
  console.log("|\t1. Realizar login\t        |");
  console.log("|\t2. Criar conta\t\t        |");
  console.log("|\t0. Sair do sistema\t        |");

  const opcao = readline.questionInt("Escolha uma opção: ");
  
  switch (opcao) {
    case 1:
      login(); 
      break;
    case 2:
      cadastroCliente(); 
      break;
    case 0:
      console.log("Saindo do sistema...");
      return; 
    default:
      console.log("Opção inválida");
      readline.question("Pressione ENTER para tentar novamente...");
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
  console.log("|---------------------------------------");
  const nomeCliente = readline.question("Nome do Cliente: ");
  const tipoServico = readline.question("Tipo do Serviço: ");
  const tempoEstimado = readline.question("Tempo Estimado: ");
  const preco = readline.question("Preço: ");

  console.log("Agendamento concluído com sucesso!");
  readline.question("Pressione ENTER para voltar à tela inicial...");
  
  telaInicio(); 
}

cadastro()



    function listas(){

        console.log(clientesCadastrados);
        





    }